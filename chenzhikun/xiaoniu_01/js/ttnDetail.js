/**
 * Create by Paul
 * 详情页面
 */
(function(){
	var detail={
		init:function(){
			this.initVm();
			this.queryDetail();
		},
		initVm:function(){
			var self=this;
			self.vm=new Vue({
				el:'#app',
				data: {
					detail:{}	
				},
				methods:{
					toDetail:function(){
						var data={};
						url="";
						self.vm.$http.get()
					}
				}
			})
		},
		queryDetail:function(){
			var self=this;
			var id=common.getParam('id');
			var data={proId:id};
			var url='json/xiaoniu_ttndetail.json';
			this.vm.$http.get(url,data).then(function(res){
				self.vm.detail=res.data;
			},function(){
				alert(网络异常,稍后再试);
			});


//			common.ajax(url,data,function(res){
//				self.vm.detail=res;
//			});
		}
	};
	detail.init();
})()
