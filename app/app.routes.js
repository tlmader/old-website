'use strict';

angular.module('personalWebApp').config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl:'app/home/home.html',
            controller: 'HomeController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);
