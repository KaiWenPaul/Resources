/**
 * Create by Paul
 * 首页
 */
(function(){
	var home={
		init:function(){
			this.queryProducts();
			this.initVm();
		},
		initVm:function(){
			var self=this;
			self.vm=avalon.define({
				$id:"app",
				prdList:[],
				imgList:[],
				projectList:[],
				getMore:function(){
				     $("#productListMore").show();
				     $(".product-list-more").hide();
				}
			});	
			avalon.scan();
			self.vm.$watch("imgList",function(){
				setTimeout(function(){
					self.addSwiper(); 
				},5)	          
			});
		},
		queryProducts:function(){
			var self=this;
			var data={};
			$.ajax({
				url:'json/xiaoniu_productList.json',
				type:'get',
				data:{},
				dataType:'json',
				success:function(res){
					self.vm.imgList=res.imgList;
		            self.vm.prdList=res.prdList;
		            self.vm.projectList=res.projectList;
//		            alert(self.vm.prdList)
				},
				error:function(){
					alert(res.Msg);
				}
			});
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
