(function () {

    var app = angular.module('myApp');


    var MainController = function ($scope, $interval, $location) {


        $scope.search = function (username) {
            $location.path('/user/' + username);
        }

        $scope.username = 'angular';

        $scope.repoSortOrder = '-stargazers_count';
    }
    app.controller("MainController", MainController);
}());