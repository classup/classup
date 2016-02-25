'use strict';

angular.module('classupApp')
	.controller('loginController', function ($scope) {
		$scope.login() = function () {
			var user = new CB.CloudUser();
			user.set('username', $scope.username);
			user.set('password', $scope.password);
			user.logIn({
			success: function(user) {
			//Login successfull
			},
			error: function(err) {
			//Error occured in user registration.
			}
			});
		}
	})
	.controller('logoutController', function ($scope) {
		$scope.logout() = function () {
			CB.CloudUser.current.logOut({
			success: function(user) {
			//log out successfull
			},
			error: function(err) {
			//Error occured in user registration.
			};
		}
	})
	.controller('signUpController', function ($scope) {
		$scope.logout() = function () {
			var user = new CB.CloudUser();
			user.set('username', $scope.username);
			user.set('password', $scope.password);
			user.set('email', $scope.email);
			user.signUp({
			success: function(user) {
			//Registration successfull
			},
			error: function(err) {
			//Error in user registration.
			}
			});
		}
	})