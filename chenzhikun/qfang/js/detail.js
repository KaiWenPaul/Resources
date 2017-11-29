/*
   create by  Paul
// */
//第一种方法
// 	var Url=window.location.href;
// 	var url_a=Url.split("?");
// 	var Id=parseInt(url_a[1]);	 
// 	var tie=localStorage.getItem("tie");
// 	$(".head_title").text("Q房资讯-"+tie);
//function detail(x){
//	var data={id:x};
//	$.ajax({
//		url:'http://jehovah.com.cn/qfang/qfangDetail.php',
//		type:'get',
//		data:data,
//		dataType:'json',
//		success:function(res){
//			var detail=res.articleDetail;
//			$("#title").text(detail.title);
//			$("#date").text(detail.createDate);
//			$("#comeFrom").text(detail.comeFrom);
//			$("#news_detail").html(detail.content);
//		},
//		error:function(){
//			alert("请求失败，请稍候再试");
//		}
//	});
//}
//detail(Id);



//第二种方法
 var Id=getParam('id');
 var category=getParam('category');
 $(".head_title").text("Q房资讯-"+decodeURIComponent(category));
 var data={id:Id};
 $.ajax({
	url:'http://jehovah.com.cn/qfang/qfangDetail.php',
	type:'get',
	data:data,
	dataType:'json',
	success:function(res){
		var detail=res.articleDetail;
		$("#title").text(detail.title);
		$("#date").text(detail.createDate);
		$("#comeFrom").text(detail.comeFrom);
		$("#news_detail").html(detail.content);
	},
	error:function(){
		alert("请求失败，请稍候再试");
	}
 });
	
function getParam(name){  
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");  
  var regexS = "[\\?&]" + name + "=([^&#]*)";  
  var regex = new RegExp(regexS);  
  var results = regex.exec(window.location.search);  
  if(results == null) { 
    return ""; 
   }
  else { 
    return decodeURIComponent(results[1].replace(/\+/g, " "));  
   }
}  
//返回上一级
$('#close_side_info').click(function(){
    	window.history.back();  
	})