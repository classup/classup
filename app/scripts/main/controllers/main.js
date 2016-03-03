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
    $scope.showTutorial = false;
    $scope.addCustomStream = false;
    $scope.show = function(parameter){
        console.log('show',parameter);
       $scope.showTutorial = true;
        console.log($scope.showTutorial)
    }
    //need to fetch default steams and subjects, then add our own from html
    $scope.myTutorial = {
        name:null,
        contact:null,
        streams:[{
            name:'Eng',
            ticked:false
        },{
            name:'Commerce',
            ticked:false
        },{
            name:'Arts',
            ticked:false
        }],
        streamsSelected:[],
        subject:{
            Eng: {
                year:'First',
                subjects:['BEE','Mech','pHysics','AM']
            }
        }
    }
    $scope.addCustomStreamName = function(){
        if($scope.customStreamName !== undefined && $scope.customStreamName !== null) { //add a check for duplicate names
             $scope.myTutorial.streams.push({
                name: _.clone($scope.customStreamName),
                ticked:true
            })
             $scope.addCustomStream = false;
             $scope.customStreamName = null;
        }
       
    }
    $scope.createTutorial = function(){
        $state.go('main.profile');
        $scope.showTutorial = false;
    }

    $scope.search = function() {
        if($scope.searchParameter !== null || $scope.searchParameter !== undefined) {
            //fire query and route to another page
            $state.go('searchDetails',{searchParameter:$scope.searchParameter});
        }        
    }
  });
