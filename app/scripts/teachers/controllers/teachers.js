'use strict';

/**
 * @ngdoc function
 * @name classupApp.controller:TeachersCtrl
 * @description
 * # AboutCtrl
 * Controller of the classupApp
 */
angular.module('classupApp')
  .controller('TeachersCtrl', function ($scope,$location,$state) {
    // $scope.user  = {
    //     username: null,
    //     password: null,
    //     hasTeacher: false
    // }
    $scope.flowFiles = {};
    $scope.editIndex = -1;
    $scope.user = {
        teachers:{
            list:[{
                name: 'Ebrahim',
                subject: 'Maths',
                experience: 10,
                image: 'img/news/news-1.jpg'
    }]
        }
    };
    var teacherObject = {
                name:null,
                subject: null,
                experience: null,
                image: 'img/news/news-1.jpg'
    };
    $scope.teacherListKeys = _.keys(teacherObject);
    $scope.addTeacher = function(){
        if($scope.user.teachers.list.length !== 0) {
            console.log(_.without(_.map($scope.user.teachers.list,'name'),null).length ,$scope.user.teachers.list.length)
            if(_.without(_.map($scope.user.teachers.list,'name'),null).length === $scope.user.teachers.list.length){

                 $scope.user.teachers.list.push(_.clone(teacherObject));
                 $scope.editIndex = $scope.user.teachers.list.length-1; //keep edit fields open for newly added object
            }    
            else
                alert('Please fill all existing fields')
        }
        else
        {
            $scope.user.teachers.list.push(_.clone(teacherObject));
            $scope.editIndex = $scope.user.teachers.list.length-1;
            console.log($scop.editIndex)
        }
        
    }
    $scope.edit = function(index){
        $scope.editIndex = index;
        console.log($scope.flowFiles) //contains image 
    }
  });
