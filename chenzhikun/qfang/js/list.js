//作者---陈志昆

function queryList(tabId){
  var data={tap:tabId};
   $.ajax({
	url:'http://jehovah.com.cn/qfang/qfangList.php',
	type:'get',
	data:data,
	dataType:'json',
	success:function(res){
	  var list=res.articleList;
	  var htmlStr="";   
	  for(var i=0;i<list.length;i++){
	    htmlStr += '<li data-id=""><a href="detail.html?id='+list[i].id+'&category='+encodeURIComponent(category)+'"><div class="list-pic"><img src="'+list[i].imgUrl+'"></div><div class="list-text"><h3>'+list[i].title+'</h3><p>'+list[i].abstract+'</p></div><div class="clearfix"></div></a></li>';
		}
		$(".list-news ul").html(htmlStr);
	},
	error:function(){
		alert("请求失败，请稍候再试");
	}
   });
}
queryList('01');
var category="百科";
//导航标题点击事件高亮显示
$("#info-tbs li").on("click",function(){
	$(this).addClass("current").siblings().removeClass("current");
    var tabId='0'+($(this).index()+1);
    category=$(this).text();
    queryList(tabId);
});
    