//7.创建一个程序主模块
angular.module('movieApp',['movieApp.route',
	'movieApp.service','movieApp.nowplayingCtrl','movieApp.laterCtrl',
	'movieApp.top250Ctrl','movieApp.details','movieApp.indexCtrl',
	'movieApp.searchCtrl','movieApp.directive']);