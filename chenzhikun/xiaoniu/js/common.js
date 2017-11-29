/**
 * 公共方法
 * huruqing
 */
(function() {

    var common = {

        init: function() {
            this.env = 'dev';
        },

        //var url = 'http://127.0.0.1/web16042/huruqing/store/json/getVerifyCode.json';
        // var url = 'http://192.168.7.200:3000/getVerifyCode';
        // 根据环境返回不同的接口
        getWebUrl: function(urlName) {
            var newUrl = '';
            if (this.env === 'dev') {
                newUrl = '../json/' + urlName + '.json';
            } else {
                newUrl = 'http://192.168.2.199/interface/xiaoniu/' + urlName + '.php';
                //newUrl = 'http://jehovah.com.cn/interface/xiaoniu/' + urlName + '.php';
            }
            return newUrl;
        },

        /**
         * 添加loading
         */
        addLoading: function () {
            var html = '<div id="loading" class="loadingBox"><p>加载中<span id="font-str"></span></p></div>';
            $('body').append(html);
        },
        /**
         * loading开始
         */
        loadingBegin: function () {
            $('#loading').show();
            var $str = $('#font-str');
            common.int = setInterval(function () {
                $str.append('.');
                if ($str.text().length > 3) {
                    $str.text('');
                }
            }, 200);
        },

        /**
         * loading结束
         */
        loadingFinish: function () {
            setTimeout(function() {
                $('#loading').hide();
                clearInterval(common.int);
            },200)
        },

        /**
         * 获取url参数
         * @param name string 需要获取的参数名称
         */
        getParam: function(name) {
            var url = location.search,
            reg = new RegExp(name + '=[^&]*'),
            arr = url.match(reg),
            result = arr && arr.toString().split('=');
            return result && result[1] || '';
        },

        /**
         * 事件绑定函数
         * @param container 选择器,非必须
         * @param events 要进行绑定的事件对象
         */
        bindEvent: function (events, obj, container) {
            var $contain = $(container || 'body');
            for (var ev in events) {
                var index = ev.lastIndexOf(' '),
                    ele = ev.substr(0, index),
                    evType = ev.substr(index + 1, ev.length);
                try {
                    $contain.delegate(ele, evType, $.proxy(obj[events[ev]], obj));
                } catch (e) {
                    continue;
                    // throw new Error('function ' + events[ev] + ' undefined');
                }
            }
        },

        /**
         * ajax全局设置
         */
        setAjax: function() {
            var self = this;
            $.ajaxSettings.beforeSend = function() {
                // self.loadingBegin();
            }
            $.ajaxSettings.complete = function() {
                // self.loadingFinish();
            }
        },

        /**
         * 公共ajax
         * @param url
         * @param data
         */
        ajax: function(url, data, suc) {
            $.ajax({
                url: url,
                type: 'GET',
                data: data,
                dataType: 'json',
                success: function(res) {
                    if (res.resCode === '000') {
                        if (typeof suc === 'function') {
                            suc(res)
                        }
                    } else {
                        alert(res.resMsg);
                    }
                },
                error: function() {
                    alert('网络异常,请稍后再试')
                }
            });
        }
    };
    window.onerror = function(err) {
        // common.loadingFinish();
    }
    // common.addLoading();
    // common.setAjax();
    common.init();
    window.common = common;
})();
