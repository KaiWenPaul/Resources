/**
 * Create by Paul
 */
(function(){
	var register={
		init:function(){
			this.initVm();
		},
		initVm:function(){
			var self=this;
			this.vm=new Vue({
				el:'#app',
				data:{
					phone:'',
					password:'',
					veryCode:''
				},
				methods:{
					register:function(){
						self.queryRegister();
						debugger;
					}
				}
			});
		},
		queryRegister:function(){
			var url='json/xiaoniu_register.json';
			var data={
				phone:this.vm.phone,
				password:this.vm.password,
				veryCode:this.vm.veryCode
			};
			$.ajax({
				url:url,
				type:'get',
				data:data,
				dataType:'json',
				success:function(res){
					alert(123);
				},
				error:function(){
					alert('网络异常,请稍候加载');
				}
				
			});
		}
	};
	register.init();
})()
