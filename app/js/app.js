angular.module('juco.boilerplate', [
  'ngRoute',

  'juco.boilerplate.controllers'
])

  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/partial/home/index.html',
        controller: 'HomeCtrl'
      });
  });
