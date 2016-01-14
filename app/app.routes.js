'use strict';

angular.module('personalWebApp').config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl:'app/home/home.html'
        })
        .when('/projects', {
            templateUrl:'app/projects/projects.html'
        })
        .when('/theodoric', {
            templateUrl:'app/theodoric/theodoric.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);
