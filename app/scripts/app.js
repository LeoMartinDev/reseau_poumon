'use strict';

/**
 * @ngdoc overview
 * @name remonApp
 * @description
 * # remonApp
 *
 * Main module of the application.
 */
var APP = angular
  .module('remonApp', [
    'ui.router',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'duScroll',
  ]);

  APP.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        templateUrl: 'views/main.html',
        url: '/',
        controller: 'MainCtrl',
        controllerAs: 'main',
      });
    $urlRouterProvider.otherwise("/")
  });
