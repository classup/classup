'use strict';

/**
 * @ngdoc function
 * @name classupApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the classupApp
 */
angular.module('classupApp')
  .controller('SearchDetailsCtrl', function ($scope,$location,$state,$stateParams) {
    console.log($stateParams.searchParameter);
    $scope.streams = [
    {
        name:'Engg',
        field:'Engg'
    },
    {
        name:'Commerce',
        field:'Commerce'
    },
    {
        name:'Science',
        field:'Science'
    },{
        name:'Medical',
        field:'Medical'
    },{
        name:'Pharma',
        field:'Pharma'
    },{
        name:'CET',
        field:'CET'
    },{
        name:'Banking',
        field:'Banking'
    }];

    //need data from search
    $scope.classUpTopics = [{
        name:'About Us',
        field:'aboutUs'
    },
    {
        name: 'Our Teachers',
        field: 'ourTeachers'
    },
    {
        name:'Subjects',
        field:'subjects'
    }]
  });
