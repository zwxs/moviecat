// 11.创建 正在热映的控制器的模块 并且创建一个正在热映控制器
angular.module('movieApp.nowplayingCtrl', [])
    .controller('nowplayingCtrl', ['$scope', '$movieServ', function($scope, $movieServ) {
        //1. 实现电影列表的展示功能
        // 1.创建一个电影列表的属性
        $scope.movie = {};
        // 2.通过ajax请求data.json文件 获取数据赋值给movie属性中
        //$http就是帮我们实现ajax请求的使用方式类似jquery的$.ajax
        //使用$http.jsonp的方式访问豆瓣的API 访问不了 原因是豆瓣API不支持angular的回调函数的形式
        // angular的jsonp跨域解决不了豆瓣API的跨域问题
        $movieServ.jsonp('https://api.douban.com/v2/movie/in_theaters', { count: 5, start:5 },
            function(data) {
                $scope.movie = data;
                $scope.$apply();
            });
    }]);
