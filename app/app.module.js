'use strict';

angular.module('personalWebApp.controllers', []);
angular.module('personalWebApp.directives', []);
angular.module('personalWebApp.filters', []);
angular.module('personalWebApp.services', []);

var app = angular.module('personalWebApp', [
	'personalWebApp.controllers',
	'personalWebApp.directives',
	'personalWebApp.filters',
	'personalWebApp.services',
	'ngRoute',
    'ui.bootstrap'
]);