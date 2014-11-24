angular.module('app').controller('mvMainCtrl', function($scope, mvIdentity, mvUser) {

	$scope.identity = mvIdentity;

	if(mvIdentity.isAuthenticated()) {
		var firstname = mvIdentity.currentUser.firstName;
		var labelname = mvIdentity.currentUser.labelName;
		var labelscene = mvIdentity.currentUser.labelScene;
		var bandone = mvIdentity.currentUser.bandOne;
		var bandtwo = mvIdentity.currentUser.bandTwo;
		var bandthree = mvIdentity.currentUser.bandThree;

		console.log(labelname);

		$scope.currentuserlabeldata = {firstname:firstname, labelname:labelname, labelscene:labelscene, bandone:bandone, bandtwo:bandtwo, bandthree:bandthree}
		
	}
});