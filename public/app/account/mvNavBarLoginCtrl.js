angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotifier, mvAuth, $location) {
	$scope.identity = mvIdentity;
	$scope.signin = function(username, password) {
		mvAuth.authenticateUser(username, password).then(function(success) {
			if(success) {
				location.reload();
			} else {
				mvNotifier.notify('Incorrect username/password combination');
			}
		});
	}
	$scope.signout = function() {
		mvAuth.logoutUser().then(function() {
			$scope.username = "";
			$scope.password = "";
			mvNotifier.notify('You have successfully signed out');
			$location.path('/');
		})
	}
});