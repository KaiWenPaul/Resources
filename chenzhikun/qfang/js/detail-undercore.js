/**
 * Create by Paul
 * 详情页面
 */

(function(){
    var detail={
    //初始化
    	init:function(){
    		this.queryDetail();
    		this.Back();
    		detail.changeTie();
    	},
    //渲染页面
    	render:function(data){
    		var tpl=$("#tpl").html();
  		    var detail=data.articleDetail;
  		    var htmlStr=_.template(tpl)({detail:detail});
  		    $("#detail").html(htmlStr);
    	},
    //请求详情数据
    	queryDetail:function(){
    		var Id=detail.getParam('id')
    		var data={id:Id};
    		$.ajax({
    			url:"http://jehovah.com.cn/qfang/qfangDetail.php",
    			type:"get",
    			data:data,
    			dataType:'json',
    			success:function(res){
    				if(res.resCode=="000"){
    					detail.render(res);    					
    				}else{
    					alert(res.resMsg);
    				}
    			},
    			error:function(){
    				alert("Error!");
    			}
    		});
    	},
    //获取参数
    	getParam:function(name){
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
    	},
    	//添加类别
    	changeTie:function(){
    		var category=detail.getParam('category');
    		$("#head_title").text('Q房资讯-'+category);
    	},
    	//返回上一级
    	Back:function(){
    	  $('#close_side_info').click(function(){
    	   window.history.back(-1);  
	      });
    	}	
    };
    detail.init(); //调用初始化方法  
})();
