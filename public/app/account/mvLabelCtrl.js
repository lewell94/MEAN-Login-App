angular.module('app').controller('mvLabelCtrl', function($scope, mvAuth, mvIdentity, mvNotifier, $location) {
	$scope.labelname = mvIdentity.currentUser.labelName;
	$scope.labelscene = mvIdentity.currentUser.labelScene;
	$scope.bandone = mvIdentity.currentUser.bandOne;
	$scope.bandtwo = mvIdentity.currentUser.bandTwo;
	$scope.bandthree = mvIdentity.currentUser.bandThree;

	$scope.update = function() {
		var newUserData = {
			labelName: $scope.labelname,
			labelScene: $scope.labelscene,
			bandOne: $scope.bandone,
			bandTwo: $scope.bandtwo,
			bandThree: $scope.bandthree,
		}

		mvAuth.updateCurrentUser(newUserData).then(function() {
			mvNotifier.notify('Your record label has been updated!');
			$location.path('/');
		}, function(reason) {
			mvNotifier.error(reason);
		})
	}
})