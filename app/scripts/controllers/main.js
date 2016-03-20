'use strict';

/**
 * @ngdoc function
 * @name remonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the remonApp
 */
angular.module('remonApp')
  .controller('MainCtrl', ['$scope', '$state', function ($scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.move = function(l) {
      $state.go(l);
    }

  }]);
