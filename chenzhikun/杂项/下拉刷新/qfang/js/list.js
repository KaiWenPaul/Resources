
(function() {

	var list = {

		init: function() {
			this.queryList('01',1);
			this.bindEvents();
		},

		bindEvents: function() {
			var currentPage = 1;
			var self = this;
			// 要确定是谁产生了滚动条
			$('.page-news').on('scroll', function(ev) {
				if(this.scrollTop + this.clientHeight === this.scrollHeight) {
					currentPage++;
					if (currentPage <= self.totalPage) {
						$('.head_title').text('正在加载中........');
						setTimeout(function() {
							self.queryList('01', currentPage);
							$('.head_title').text('Q房资讯');
						},2000);
						
					} else {
						$('.head_title').text('已经到最后一页');
						setTimeout(function() {
							$('.head_title').text('Q房资讯');
						},2000);
					}
				}
			});
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