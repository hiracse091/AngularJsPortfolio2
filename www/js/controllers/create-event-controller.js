app.controller('CreateEventCtrl', function($scope,$state,$stateParams, $eventService,$httpBackend, $http,$utility,$mdDialog) {
	$scope.subHeader = '';
	$scope.action = '';
	$scope.event = {};
    $scope.types = [{value:'free',name:'Free'},
			    	{value:'pledge',name:'Pledge'},
			    	{value:'ticket_sale',name:'Ticket Sale'}];

    $scope.setAction = function() {
    	if($state.current.name == 'admin.edit_event'){
			$scope.subHeader = 'Edit';
			$scope.action = 'Save';
			if($stateParams.id){
		    	var id = $stateParams.id;
		    	$scope.getEventById(id);
		    }
		}else{
			$scope.subHeader = 'Create';
			$scope.action = 'Submit';
		}
    }
    $scope.getEventById = function(id){
    	$eventService.getById(id).then(function(data) {
            if (data.success) {
                $scope.message = data.message;
	        	$scope.event = data.data;
            } else {
                $scope.showAlert(data.message);
            }
        }, function(message) {
            $scope.showAlert(message);
        });
    }
    $scope.$on('$viewContentLoaded',function(event){ 
    	$scope.setAction();
    });
    $scope.saveEvent = function(event){
    	event.created_by = '';
    	$eventService.create(event).then(function(data) {
            if (data.success) {
                $scope.message = data.message;
	        	$utility.show($scope.message);
	        	$scope.event = {};
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