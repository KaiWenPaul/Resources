/**
 * Create by Paul
 * 登录页面
 */
(function(){
	var login={
		init:function(){
			this.initVm();
		},
		initVm:function(){
			var self=this;
			this.vm=avalon.define({
				$id:'app',
				data:{
				username:'',
				password:'',
				code:''
				},				
			    submit:function(){
						self.queryLogin();
				},
			});
			avalon.scan();
		},
		queryLogin:function(){
			var self=this;
			var url='json/xiaoniu_login.json';
			var data={
				username:this.vm.username,
				password:this.vm.password,
				code:this.vm.code
			}
			$.ajax({
				type:"get",
				url:url,
				data:data,
				dataType:'json',
				success:function(res){
				   alert(123);
				},
				error:function(){
					alert('网络异常,请稍后加载');
				}
			});
		},
	};
	login.init();
})()
