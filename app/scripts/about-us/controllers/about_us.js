'use strict';

/**
 * @ngdoc function
 * @name classupApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the classupApp
 */
angular.module('classupApp')
  .controller('AboutUsCtrl', function ($scope,$location,$state,$stateParams) {
   	console.log($stateParams.route)
  });
