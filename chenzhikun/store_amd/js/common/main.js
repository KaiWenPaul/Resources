/**
 * 统一文件入口
 */
require(['../config'],function(){
	var path=document.getElementById('path').dataset.url;
	require([path]);
});
