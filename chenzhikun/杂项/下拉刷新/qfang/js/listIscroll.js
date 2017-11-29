
(function() {

	var list = {

		init: function() {
			this.queryList('01',1);
		},

		render: function(data) {
			var htmlStr = '';
			var list = data.articleList;
			for(var i = 0; i < list.length; i++) {
				htmlStr += '<li data-id="1000"><a> <div class="list-pic"><img src="' + list[i].imgUrl + '">' +
					'</div> <div class="list-text"><h3>' + list[i].title + '</h3> <p>' + list[i].abstract + '</p> ' +
					'</div> <div class="clearfix"></div> </a></li>';
			}
			$('#arc-list').append(htmlStr);
			this.totalPage = data.totalPage;
			this.addScroll();
		},

		addScroll: function() {
			var self = this;
			// var loadText = $('#J-load-text');
			this.yScroller = new IScroll('#container',{
				checkDOMChanges: true,
				fixedScrollbar: false,
				hideScrollbar: true,
				fadeScrollbar: true,
				// 滚动开始
				onScrollStart: function() {

				},
				onScrollMove: function () {
					if (this.y <= this.maxScrollY-50 && this.distY<0) {
						/*if (commData.currentPage === commData.totalPage) {
							loadText.find('p').text('已无更多资讯');

						} else {
							loadText.find('p').text('放开加载更多');
						}*/
					} else if(this.y > this.maxScrollY){
						/*commData.loadFlag = false;
						if (commData.currentPage === commData.totalPage) {
							// loadText.text("已无更多资讯");
							loadText.find('p').text('已无更多资讯');
						} else {
							loadText.find('p').text('上拉加载更多');
						}*/
						console.log('不知道做什么用');
					}
				},
				// 滚动结束
				onScrollEnd: function () {
					console.log('滚动结束');
				}
			});
		},

		queryList: function(tapId, currentPage) {
			var self = this;
			var url = 'list.json';
			var data = {
				tap: tapId,
				currentPage: currentPage
			};
			$.ajax({
				url: url,
				data: data,
				type: 'get',
				dataType: 'json',
				success: function(res) {
					self.render(res);
				},
				error: function() {
					alert('error');
				}
			})
		}
	};
	list.init();
})();