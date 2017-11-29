/**
 * Create by Paul
 * 首页
 */
(function(){
	var home={
		//初始化
		init:function(){
//			common.clearCar();
			this.queryList(false);
			this.bindEvents();
		},
		bindEvents:function(){
			var self=this;
			//列表商品点击跳转到详情页
		    $('#product_list').delegate('a', 'click', function(ev) {
                var id = $(this).closest('li').data('id');
                var shopNum = $('.car_trolley').text();
                var obj = {
                    id: id
                };
                localStorage.setItem('shopNum',shopNum);
                location.href = 'detail.html?' + $.param(obj);
            });
		    //推荐商品跳转到详情页
		    $("#recommend").on('click','a',function(){
		    	var id = $(this).parent().eq(0).data('id');
                var shopNum = $('.car_trolley').text();
                var obj = {
                    id: id
                };
                localStorage.setItem('shopNum',shopNum);
                location.href = 'detail.html?' + $.param(obj);
		    })
			//点击更多事件
			$("#btn_more").on('click',function(){
				self.getMore();
			});
			//购物车添加事件
			$("#product_list").on('click','.product_car',function(){
				var id=$(this).closest('li').data('id');
				self.addCar(id);
			});
			
		},
		//渲染页面
		render:function(data){
			//第一个模版
			var tp1=$("#tp1").html();
			var recomTpl=data.list[0];//第一个数据
			var htmlStr=_.template(tp1)({recomTpl:recomTpl});
			$("#recommend").html(htmlStr);
			//第二个模版
			var tp2=$("#tp2").html();
			var recomTpl2=data.list.splice(1);//其余4个数据
			var htmlStr2=_.template(tp2)({recomTpl2:recomTpl2});
			$("#product_list").html(htmlStr2);
			//显示购物车商品数量
			if(data.shopNum>0){
			   $(".car_trolley").removeClass("dsn").text(data.shopNum);
			}
		},
		//更多渲染
		renderMore:function(data){
			var tp2=$("#tp2").html();
			var recomTpl2=data.list;
			var htmlStr2=_.template(tp2)({recomTpl2:recomTpl2});
			$("#product_list").append(htmlStr2);
			$('#btn_more').addClass('dsn');
		},
		//更多函数
		getMore:function(){
			home.queryList(true);
		},
		//添加购物车
		addCar:function(id){
			var url=common.urlRoot+'addToShopCar';
			var data={id:id,prdNum:1};
			common.ajax(url,data,function(res){
				 $('#hasAdd').removeClass('dsn');
                setTimeout(function(){
                    $('#hasAdd').addClass('dsn');
                },400);
                // 商品显示的红点
                var $carNum = $('.car_trolley');
                // 获取数量
                var num = $carNum.text() | 0;
                // 如果元素时隐藏的,就显示
                if ($carNum.hasClass('dsn')) {
                    $carNum.removeClass('dsn');
                }
                // 新增加商品时,购物车的商品数量加1
                if (res.newly === 'Y') {
                    $carNum.text(++num);
                }
			});
		},
		//查询数据
		queryList:function(flag){
			var self=this;
			var sessionId=localStorage.getItem('sessionId');//获取sessionId参数
			var url=common.urlRoot+'shopListQuery';
			var data={sessionId:sessionId,isMore:flag};
//			使用公共ajax
			common.ajax(url,data,function(res){
				//如果isMore为false
				if(flag){
					self.renderMore(res);
				}else{
					self.render(res);
				}
			});
		},
	};
	home.init();	
})()
