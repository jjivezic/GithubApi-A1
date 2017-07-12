// var work = function () {
//     console.log('function working')
// }
// var doWork = function (f) {
//     //console.log('function working in do Work');
//     f();

// }

// doWork(work);
// (function () {

//     var createWorker = function () {
//         var count = 0
//         var task1 = function () {
//             count++;
//             console.log('task1' + ' ' + count);
//         }
//         var task2 = function () {
//             count++;
//             console.log('task2' + ' ' + count);
//         }

//         return {
//             job1: task1,
//             job2: task2,
//         }
//     }

//     var worker = createWorker();

//     //worker.job1();
//     worker.job2();
//     worker.job2();
//     worker.job2();
//     worker.job1();
// }());
(function () {

    var app = angular.module('myApp');


    var UserController = function ($scope, github, $routeParams) {

        var onUserCompleate = function (data) {
            $scope.user = data;
            github.getRepo($scope.user).then(onRepos, onError);
            console.log($scope.user);
        }

        var onRepos = function (data) {
            $scope.repos = data;
            console.log($scope.repos);
        }

        var onError = function (reason) {
            $scope.error = 'User with that name don\'t exist or Api ist\'n available';
        }

        $scope.username = $routeParams.username;
        $scope.repoSortOrder = '-stargazers_count';
        github.getUser($scope.username).then(onUserCompleate, onError);
    }
  app.controller("UserController", UserController);
}());