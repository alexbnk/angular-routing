var app = angular.module('scotcha', ['ui.router','geolocation']);



app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'partial-home.html'
      })
      .state('home.list', {
        url: '/list',
        templateUrl: 'partial-home-list.html'
      })
      .state('products', {
        url: '/products',
        templateUrl: 'products.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'contact.html'
      })
      .state('contact.map', {
        url: '/contact/howtogethere',
        templateUrl: 'map.html'
      })
      .state('heb', {
        url: '/shabath',
        templateUrl: 'heb.html'
      })
      .state('scotch', {
    url: '/scotch/:type?temp',
    templateUrl: 'scotch.html',
    controller: function($scope, $stateParams) {
      $scope.myScotch = $stateParams;
    }
  })


});
