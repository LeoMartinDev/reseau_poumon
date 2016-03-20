'use strict';

/**
 * @ngdoc function
 * @name remonApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the remonApp
 */

APP
  .controller('NavbarCtrl', ['$scope', '$state', function ($scope, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.$state = $state;

  }]);
