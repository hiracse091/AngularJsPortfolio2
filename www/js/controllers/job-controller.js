app.controller('JobCtrl', function($scope,$state,$stateParams, $location,$jobService,$httpBackend, $http,$mdDialog) {
	$scope.subHeader = '';
	$scope.action = '';
    $scope.showChatBtn = false;
	$scope.job = {};
    $scope.jobs;

    $scope.jobType = ['Hourly','Fixed'];
    $scope.messages =[{
                date_time:"Sat, 07 Nov 2015 06:03:28 GMT",
                text:"Hi Joe!",
                sender:'job_poster'
            },{
                date_time:"Sat, 07 Nov 2015 06:03:29 GMT",
                text:"Hello,Tom!",
                sender:'job_seeker'
            },{
                date_time:"Sat, 07 Nov 2015 06:03:30 GMT",
                text:"What will be the budget of this job?",
                sender:'job_seeker'
            },{
                date_time:"Sat, 07 Nov 2015 06:03:31 GMT",
                text:"I will give you $300 for this. You need to finish this by monday.",
                sender:'job_poster'
            },{
                date_time:"Sat, 07 Nov 2015 06:05:28 GMT",
                text:"I will do this.",
                sender:'job_seeker'
            }];
    

    
    $scope.setAction = function() {
        if($state.current.name == 'job.search'){
            $scope.getLatestJobs();
        }
        if($state.current.name == 'job.bidJob'){
            $scope.showChatBtn = true;
        }else{
            $scope.showChatBtn = false;
        }
    	if($stateParams.id){
            var id = $stateParams.id;
            $scope.getJobById(id);
        }
    };
    $scope.getJobById = function(id){
    	$jobService.getById(id).then(function(data) {
            if (data.success) {
                $scope.message = data.message;
	        	$scope.job = data.data;
            } else {
                $scope.showAlert(data.message);
            }
        }, function(message) {
            $scope.showAlert(message);
        });
    };
    $scope.getLatestJobs = function(){
        $jobService.getLatest().then(function(data) {
            if (data.success) {
                $scope.message = data.message;
                $scope.jobs = data.data;
            } else {
                $scope.showAlert('No job found!');
            }
        }, function(message) {
            $scope.showAlert('ERROR!');
        });
    };
    $scope.$on('$viewContentLoaded',function(event){ 
    	$scope.setAction();
    });
    $scope.createJob = function(job){
    	job.created_by = '';
    	$jobService.create(job).then(function(data) {
            if (data.success) {
                $scope.message = data.message;
	        	$scope.showAlert($scope.message);
	        	$scope.job = {};
            } else {
                $scope.showAlert(data.message);
            }
        }, function(message) {
            $scope.showAlert(message);
        });
    	
    }; 
    $scope.bidJob = function(job){        
        //$location.url("/job/search");
        $scope.showAlert('You bid the job successfully!');
    };
    $scope.sendMessage = function(msg){
        $scope.messages.push({date_time:new Date().toUTCString(),text:msg.text,sender:'job_seeker'});
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
	$scope.search = function(job){
        $scope.jobs = [];
        $jobService.search(job).then(function(data) {
            if (data.success) {
                $scope.jobs = data.data;
            } else {
                $scope.jobs = [];
            }
        }, function(message) {
            $scope.showAlert(message);
        });
    }
    $scope.expand = function(e, job) {
        e.preventDefault();
        angular.forEach($scope.jobs, function(e) {
            e.selected = false;
        });
        job.selected = true;
    };

});