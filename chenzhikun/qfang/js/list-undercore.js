/**
 * Create by Paul
 * 列表页面
 */
(function(){
//	定义一个列表对象
	var list={
		category:'百科',
		//初始化
		init:function(){
		   this.queryList('01');
		   this.tapChange();
		},
		//点击高亮事件
		tapChange:function(){
		  var self=this;
		  $("#info-tbs li").on("click",function(){
		  	 $(this).addClass("current").siblings().removeClass("current");
		  	 list.category=$(this).text();
		  	 var tapId='0'+($(this).index()+1);
		  	 self.queryList(tapId);
		  });
		},
		//渲染页面
		render:function(data){
			 var tpl=$("#tpl").html();
			 var lists=data.articleList;
			 var htmlStr=_.template(tpl)({lists:lists,b:list.category});
			 $("#list").html(htmlStr);
		},
		//列表对象
		queryList:function(tapId){
			var  data={tap:tapId};
			$.ajax({
				url:'http://jehovah.com.cn/qfang/qfangList.php',
				type:'get',
				data:data,
				dataType:'json',
				success:function(res){
					if(res.resCode=='000'){
						list.render(res);
					}else{
						alert(res.resMsg);
					}
				},
				error:function(){
					alert('error!');
				}
			});
		}		
	};
	list.init();//调用初始化方法
})();
