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
      }).state('signIn', {
        templateUrl: 'views/signIn.html',
        url: '/signIn/:type',
        controller: 'SignInCtrl',
        controllerAs: 'SignIn'
      })
      .state('choose', {
        templateUrl: 'views/choose.html',
        url: '/choose',
        controller: 'SignInCtrl',
        controllerAs: 'SignIn'
      });

    $urlRouterProvider.otherwise('/');
  });
