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

  }]).controller('SignInCtrl', ['$scope', '$state', '$stateParams',function ($scope, $state, $stateParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    if ($stateParams.type != undefined)
    	$scope.userType = $stateParams.type;
    $scope.setType = function (type) {
    	$state.go('signIn', {type});
    };
  }]);

