/**
 * Create by Paul
 * 首页
 */
(function(){
	var home={
		init:function(){
			this.initVm();
			this.queryProducts();
		},
		initVm:function(){
			var self=this;
			self.vm=new Vue({
				el:"#app",
				data:{
					imgList:[],
					prdList:[],
					projectList:[]
				},
				methods:{
					getMore:function(){
				     $("#productListMore").show();
				     $(".product-list-more").hide();
					},
					toDetail: function(item) {
//                      location.href="tiantianniu.html";
                    }
				},
				watch:{
					imgList:function(){
						self.addSwiper();
					}
				}
			})
		},
		queryProducts:function(){
			var self=this;
			var data={};
			var url="json/xiaoniu_productList.json";
			this.vm.$http.get(url,data).then(function(res) {
                // 全部的列表
                self.vm.imgList=res.data.imgList;
	            self.vm.prdList=res.data.prdList;
	            self.vm.projectList=res.data.projectList;
            },function() {
                alert('error');
            });


//			$.ajax({
//				url:'json/xiaoniu_productList.json',
//				type:'get',
//				data:{},
//				dataType:'json',
//				success:function(res){
//					self.vm.imgList=res.imgList;
//		            self.vm.prdList=res.prdList;
//		            self.vm.projectList=res.projectList;
//				},
//				error:function(){
//					alert(res.Msg);
//				}
//			});
		},
		//轮播图
		addSwiper:function(){
		    var mySwiper = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',	        
	        paginationClickable :true,
	        autoplay: 1000,
	        loop: true,
//	        prevButton:'.swiper-button-prev',
//          nextButton:'.swiper-button-next'
           });
		}
	};
	home.init();
})()
