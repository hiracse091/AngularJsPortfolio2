app.controller('RegistrationCtrl', function($scope,$state,$stateParams, $registerService,$httpBackend, $http,$mdDialog) {
	
	$scope.member = {};    

    $scope.setAction = function() {
  //   	if($state.current.name == 'admin.edit_event'){
		// 	$scope.subHeader = 'Edit';
		// 	$scope.action = 'Save';
		// 	if($stateParams.id){
		//     	var id = $stateParams.id;
		//     	$scope.getEventById(id);
		//     }
		// }else{
		// 	$scope.subHeader = 'Create';
		// 	$scope.action = 'Submit';
		// }
    }
    
    // $scope.$on('$viewContentLoaded',function(event){ 
    // 	$scope.setAction();
    // });
    $scope.register = function(member){
    	member.created_by = '';
    	$registerService.create(member).then(function(data) {
            if (data.success) {
                $scope.message = data.message;
	        	$scope.showAlert($scope.message);
	        	$scope.member = {};
            } else {
                $scope.showAlert(data.message);
            }
        }, function(message) {
            $scope.showAlert(message);
        });
    	
    }  
    
    $scope.showAlert = function(msg,ev) {
    
	    $mdDialog.show(
	        $mdDialog.alert()
		        .parent(angular.element(document.querySelector('#popupContainer')))
		        .clickOutsideToClose(true)
		        .title('Success')
		        .content(msg)
		        .ariaLabel('Success message')
		        .ok('OK')
		        .targetEvent(ev)
	    );
	};
	

});