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

    var app = angular.module('myApp', []);


    var MainController = function ($scope, github, $interval, $log, $anchorScroll, $location) {
        $scope.username = 'angular';
        $scope.repoSortOrder = '-stargazers_count';


        //on click call api


        var onUserCompleate = function (data) {
            $scope.user = data;
            github.getRepo($scope.user).then(onRepos, onError);
            console.log($scope.user);
        }

        var onRepos = function (data) {
            $scope.repos = data;
            $location.hash('userDetails'); //za skrol do id userDetails
            $anchorScroll();

            console.log($scope.repos);
        }
        $scope.search = function (username) {
            github.getUser(username).then(onUserCompleate, onError);

        }
        var onError = function (reason) {
            $scope.error = 'User with that name don\'t exist';
        }

    }
    /* var MainController = function ($scope, $http, $interval, $log, $anchorScroll, $location) {
         $scope.username = 'angular';
         $scope.repoSortOrder = '-stargazers_count';
         //$scope.couuntdown = 5;


         //on click call api
         $scope.search = function (username) {
             $http.get('https://api.github.com/users/' + username)
                 .then(onUserCompleate, onError);
             // if (countStopInterval) {
             //     $interval.cancel(countStopInterval);
             //     $scope.couuntdown = null;
             // }
         }

         var onUserCompleate = function (response) {
             $scope.user = response.data;
             $http.get($scope.user.repos_url)
                 .then(onRepos, onError);
             console.log($scope.user);
         }

         var onRepos = function (response) {
             $scope.repos = response.data;
             $location.hash('userDetails');//za skrol do id userDetails
             $anchorScroll();

             console.log($scope.repos);
         }
         var onError = function (reason) {
             $scope.error = 'User with that name don\'t exist';
         }
         // var countStopInterval = null;
         // var countDown = function () {
         //  $scope.couuntdown = $scope.couuntdown - 1
         // if ($scope.couuntdown < 1) {
         //     $scope.search($scope.username)
         // }
         //  }

         // var startCounting = function () {
         //     countStopInterval = $interval(countDown, 1000, $scope.couuntdown);
         // }



         // startCounting();
     }
     */
    app.controller('MainController', ['$scope', 'github', '$interval', '$log', '$anchorScroll', '$location', MainController]);
}());