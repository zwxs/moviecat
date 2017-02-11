// 9.创建一个路由模块 因为要配置路由要依赖angular的路由模块 要依赖ngRoute模块
angular.module('movieApp.route', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        //配置路由
        $routeProvider.when('/', {
            templateUrl: 'tmps/index-tmp.html'
        }).when('/nowplaying', {
            templateUrl: 'tmps/nowplaying-tmp.html',
            controller: 'nowplayingCtrl'
        }).when('/later', {
            templateUrl: 'tmps/later-tmp.html',
            controller: 'laterCtrl'
        }).when('/top250', {
            templateUrl: 'tmps/top250-tmp.html',
            controller:'top250Ctrl'
        })
    }]);
