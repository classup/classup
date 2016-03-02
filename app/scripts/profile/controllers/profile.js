'use strict';

/**
 * @ngdoc function
 * @name classupApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the classupApp
 */
angular.module('classupApp')
  .controller('ProfileCtrl', function ($scope,$location) {
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
    $scope.teachersGallery = [{
        name:'A',
        image_src: null
    },{
        name:'B',
        image_src: null
    },{
        name:'C',
        image_src: null
    },{
        name:'D',
        image_src: null
    },{
        name:'D',
        image_src: null
    },{
        name:'D',
        image_src: null
    },{
        name:'D',
        image_src: null
    }];

    $scope.subjectCss = ['mon','tue','wed','thu','fri','sat'];
    $scope.subjectList = {
        'Engineering': [{
            year:'First Year',
            subjects: ['BI','ODC','sda','HJS']
        }],
        'Science':[],
        'Commerce':[],
        'Arts':[]
    }
    $scope.subjectListKeys = _.keys($scope.subjectList)
    $scope.editForm = function(name) {
        $location.path('/editDetails');
    }
    $scope.save = function(){
        
        $location.path('/');
    }
  });
