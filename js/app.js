'use strict';

// Declare app level module which depends on filters, and services
angular.module('eVidente', [
    'ngRoute', 'ngCookies',
    'eVidente.services',
    'eVidente.controllers'
]);

angular.module('eVidente.services', []);
angular.module('eVidente.controllers', []);

angular.module('eVidente').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/main', {
            templateUrl: 'partials/main.html',
            controller: 'MainCtrl'
        });
        $routeProvider.otherwise({
            redirectTo: '/main'
        });
    }
]);