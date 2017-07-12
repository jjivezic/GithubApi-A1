(function () {
    var app = angular.module('myApp', ['ngRoute']);

    app.config(function ($routeProvider) {

        $routeProvider
            .when('/main', {
                templateUrl: '../main.html',
                contorller: 'MainController.js'
            })
            .when('/user/:username', {
                templateUrl: '../user.html',
                contorller: 'UserController.js'
            })
            .otherwise({
                redirectTo: '/main'
            });
    });
}());