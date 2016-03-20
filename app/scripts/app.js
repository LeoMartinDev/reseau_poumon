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
    'ngSanitize',
    'ngTouch',
    'duScroll',
  ]);

APP
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        controller: 'MainCtrl',
        templateUrl: 'views/main.html',
        url: '/',
      })
      .state('info', {
        templateUrl: 'views/info.html',
        url: '/info',
      }).state('p', {
        templateUrl: 'views/parrain.html',
        url: '/p',
      }).state('b', {
        templateUrl: 'views/bureau.html',
        url: '/b',
      });
    $urlRouterProvider.otherwise("/");
  });
