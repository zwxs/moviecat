angular.module('movieApp.details', [])
    .controller('detailsCtrl', ['$scope', '$movieServ', '$routeParams', function($scope, $movieServ, $routeParams) {
        $scope.isLoading = false;
        $movieServ.jsonp('https://api.douban.com/v2/movie/subject/' + $routeParams.id, {},
            function(data) {
                $scope.movie = data;
                console.log(data);
                $scope.isLoading = true;
                $scope.$apply();
            });
    }])
