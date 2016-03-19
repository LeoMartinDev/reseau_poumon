'use strict';

/**
 * @ngdoc function
 * @name remonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the remonApp
 */
angular.module('remonApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  }]);
