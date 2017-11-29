/**
 * require配置文件
 */
requirejs.config({
    // 加载js文件时以此路径作为参照 baseUrl + paths = 文件的完整路径
    baseUrl: 'http://127.0.0.1/chenzhikun/AMD/js/',
    // 设置超时
    waitSeconds: 10,
    // 不同的版本用不同的标识,达到清理缓存的目的
    urlArgs: 'v=2016829',
    // 配置短路径  baseUrl + 短路径 === 完整路径
    paths: {
        'jquery': 'libs/jquery',
        'jquery': 'libs/jquery-1.10.2.min',
        'store': 'libs/store',
        'zepto': 'libs/zepto',
        'Touch': 'libs/Touch.1.1',
        'text': 'libs/text',
        'common': 'common/common',
        'underscore': 'libs/underscore',
        'avalon': 'libs/avalon',
        'datepick': 'plugins/date/jquery.datepick',
        'datepick-zh-CN': 'plugins/date/jquery.datepick-zh-CN'
    },

    // 定义非amd模块和依赖
    shim: {
        // 加载非AMD规范js文件
        'avalon': {exports: 'avalon'},
        'Touch': {exports: 'Touch'},
        'zepto': {exports: '$'},
        'jquery': {exports: '$'},
        'underscore': {exports: '_'},
        // 声明依赖关系
        'datepick': {
            deps: ['jquery']
        },
        'datepick-zh-CN': {
            deps: ['jquery', 'datepick']
        }
    }
});