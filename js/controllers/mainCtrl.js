'use strict';

/* Controllers */
angular.module('eVidente.controllers')
    .controller('MainCtrl', ["$scope",
        function($scope) {
            $scope.palavra = "teste"
        }
    ])