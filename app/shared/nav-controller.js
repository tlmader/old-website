'use strict';

angular.module('personalWebApp.controllers').controller('NavController', function($scope, $location) {

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});