'use strict';

/**
 * @ngdoc function
 * @name classupApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the classupApp
 */
angular.module('classupApp')
  .controller('LoginCtrl', function ($scope,$location,$state) {
    $scope.user  = {
        username: null,
        password: null,
        hasClass: true
    }
    $scope.validateUser = function(){
         //make call to server and validate
        if($scope.user.username === $scope.user.password) {
            //if resp true , then send id 
            if(!$scope.user.hasClass)    //need to check for classes
                $state.go('main',{id:190});
            else    //else route to empty page
                $state.go('main.profile',{id:190})  
        }    
        else
            alert('Invalid username or password');
    }
  });
