'use strict';

/**
 * @ngdoc function
 * @name classupApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the classupApp
 */
angular.module('classupApp')
  .controller('EditProfileCtrl', function ($scope,$location,$state) {
    $scope.editOptions = [
    {
        name:'Overview',
        field:'overview'
    },
    {
        name:'About Us',
        field:'aboutUs'
    },
    {
        name:'Streams',
        field:'streams'
    },{
        name:'Subjects',
        field:'subjects'
    },{
        name:'Teachers',
        field:'teachers'
    },{
        name:'Schools',
        field:'schools'
    },{
        name:'Colleges',
        field:'colleges'
    },{
        name:'Univ',
        field:'univ'
    },{
        name:'Location',
        field:'location'
    },{
        name:'Contact',
        field:'contact'
    }]
  });
