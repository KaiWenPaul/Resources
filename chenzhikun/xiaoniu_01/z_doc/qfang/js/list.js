/**
 * Created by huruqing on 2016/8/29 0029.
 * 列表页面
 */

(function() {

    var list = {

        init: function() {
            this.initVm();
            this.queryList();
        },

        // 初始化vm
        initVm: function() {
            this.vm = new Vue({
                el: '#app',
                data: {
                    tap: '01',
                    list: []
                },
                methods: {
                    // 切换类别
                    changTap: function(tapId) {
                        this.tap = tapId;
                    },
                    toDetail: function(item) {
                        debugger;
                    }
                }
            });
        },

        queryList: function() {
            var data = {
                tap: '01'
            };
            var self = this;
            $.ajax({
                url: 'http://jehovah.com.cn/qfang/qfangList.php',
                type: 'get',
                data: data,
                dataType: 'json',
                success: function(res) {
                    // 渲染页面
                    self.vm.list = res.articleList;
                },
                error: function() {
                    alert(res.Msg);
                }
            });
        }
    };
    list.init();


})()

