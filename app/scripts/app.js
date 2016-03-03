'use strict';

/**
 * @ngdoc overview
 * @name classupApp
 * @description
 * # classupApp
 *
 * Main module of the application.
 */
angular
  .module('classupApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'countUpModule',
    'ui.router',
    'isteven-multi-select'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("main/profile");

    // $routeProvider
    //   .when('/', {
    //     templateUrl: 'scripts/main/main.html',
    //     controller: 'MainCtrl',
    //     controllerAs: 'main'
    //   })
    //   .when('/editDetails', {
    //     templateUrl: 'scripts/edit-details/edit-details.html',
    //     controller: 'MainCtrl'
    //   })
    //   .when('/about', {
    //     templateUrl: 'views/about.html',
    //     controller: 'AboutCtrl',
    //     controllerAs: 'about'
    //   })
      
    //   .otherwise({
    //     redirectTo: '/'
    //   });


    $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "scripts/login/login.html",
      controller: 'LoginCtrl'
    })
    .state('main', {
      url: "/:id",
      templateUrl: "scripts/main/main.html",
      controller: 'MainCtrl'
    })
    .state('main.profile', {
      url: "/profile",
      templateUrl: "scripts/profile/profile.html",
      controller: 'ProfileCtrl'
    })
    // .state('main.editProfile', {
    //   url: "/editProfile",
    //   templateUrl: "scripts/edit/edit.html",
    //   controller: 'EditCtrl'
    // })
    .state('editProfile', { 
      parent: 'main',
      params: { route:null},
      url: "/editProfile",
      templateUrl: "scripts/edit-profile/edit-profile.html",
      controller: 'EditProfileCtrl'
    })
    .state('editProfile.aboutUs', { 
      url: "/aboutUs",
      templateUrl: "scripts/about-us/about-us.html",
      controller: 'AboutUsCtrl'
    })
    .state('searchDetails', { 
      url: "/search",
      params: {searchParameter:null},
      templateUrl: "scripts/search-details/search-details.html",
      controller: 'SearchDetailsCtrl'
    });
    // .state('state2.list', {
    //   url: "/list",
    //   templateUrl: "partials/state2.list.html",
    //   controller: function($scope) {
    //     $scope.things = ["A", "Set", "Of", "Things"];
    //   }
    // });



  });
