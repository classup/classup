'use strict';

/**
 * @ngdoc function
 * @name classupApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the classupApp
 */
angular.module('classupApp')
  .controller('MainCtrl', function ($scope,$location,$state) {
    $scope.userRating= {
    	count: 7,
    	rated: 'Professional Teaching',
    	review: 'Focus is on teaching, may be a bit pricey but worth it.'
    }
    $scope.index = 0;
    $scope.userDetails = {
        aboutUs:[{
        	field: 'Name',
        	value:'Ebrahim',
            type:'text'
        },
        {
        	field: 'Contact No',
        	value: 012839120,
            type:'number'
        },
        {
        	field:'Location',
        	value: 'Powai Hiranandani',
            type:"text"
        }],
        subjects:[],
        teachers:[]
    };
    $scope.userDetailsKeys = _.keys($scope.userDetails)
   

    $scope.classUpTopics = [{
    	name:'About Us'
    },
    {
    	name: 'Our Teachers'
    },
    {
    	name:'Subjects'
    }]
    //$state.go('main.profile');
    $scope.editForm = function(name) {
        $location.path('/editDetails');
    }
    $scope.save = function(){
        
        $location.path('/');
    }

    $scope.search = function() {
        if($scope.searchParameter !== null || $scope.searchParameter !== undefined) {
            //fire query and route to another page
            $state.go('searchDetails',{searchParameter:$scope.searchParameter});
        }        
    }
  });
