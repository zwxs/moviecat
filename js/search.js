angular.module('movieApp.searchCtrl', [])
    .controller('searchCtrl', ['$scope', '$movieServ', '$routeParams', function($scope, $movieServ, $routeParams) {
        $scope.isLoading = false;
        $scope.name = $routeParams.name || '周星驰';
        $scope.pageid = $routeParams.pageid || 1;
        //1. 实现电影列表的展示功能
        // 1.创建一个电影列表的属性
        $scope.movie = {};
        var start = ($scope.pageid - 1) * 5;
        // 2.通过ajax请求data.json文件 获取数据赋值给movie属性中
        $movieServ.jsonp('https://api.douban.com/v2/movie/search', { q: $scope.name, count: 5, start: start },
            function(data) {
                $scope.movie = data;
                console.log(data);
                $scope.total = data.total;
                $scope.pageCount = Math.ceil(data.total / 5);

                $scope.prevPage = $scope.pageid - 1;
                if ($scope.prevPage < 1) {
                    $scope.prevPage = 1;
                }
                $scope.nextPage = $scope.pageid - 0 + 1;
                if ($scope.nextPage >= $scope.pageCount) {
                    $scope.nextPage = $scope.pageCount
                }
                $scope.isLoading = true;
                $scope.$apply();


            });
    }])
