/**
 * 	Create by Paul
 */


define([], function() {
    alert('这是一个模块');
    var obj = {
    	name:'paul',
    	age:123,
        say: function() {
            alert('hello world');
        }
    };
    return obj;
});
