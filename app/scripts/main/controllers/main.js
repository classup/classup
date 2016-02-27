'use strict';

/**
 * @ngdoc function
 * @name classupApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the classupApp
 */
angular.module('classupApp')
  .controller('MainCtrl', function ($scope,$location) {
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
    $scope.utilities = [{
    	name: 'MAP',
    	url: '/map'
    },{
    	name: 'Share',
    	url: '/share'
    },{
    	name: 'Review',
    	url: '/review'
    },{
    	name: 'Your Vote',
    	url: '/vote'
    },{
    	name: 'Ask Your Friend',
    	url: '/ask_your_friend'
    },{
    	name: 'Check mark',
    	url: '/check_mark'
    }];

    $scope.classUpTopics = [{
    	name:'About Us'
    },
    {
    	name: 'Our Teachers'
    },
    {
    	name:'Subjects'
    }]

    $scope.editForm = function(name) {
        $location.path('/editDetails');
    }
    $scope.save = function(){
        
        $location.path('/');
    }
  });
