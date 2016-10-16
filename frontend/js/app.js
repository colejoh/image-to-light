var app = angular.module('imageToHue', ['ngRoute']);

app.config(function($routeProvider, $httpProvider) {

  $routeProvider.when('/', {
      templateUrl: 'templates/main.html',
      controller: 'mainCtrl'
    });
});
