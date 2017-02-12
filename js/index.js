angular.module('movieApp.indexCtrl', [])
    .controller('indexCtrl', ['$scope', '$location', function($scope, $location) {
        $scope.name = '';
        $scope.search = function() {
        	console.log($scope.name);
            $location.url('/search?name=' + $scope.name);
        }
    }])
