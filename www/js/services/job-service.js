app.service('$jobService', function($q, $http, $window) {
	this.create = function(data){
		var deferred = $q.defer();
		$http({
                url: 'createJob',
                method: "POST",
                data: data
            }).success(function(response) {
                if (response.success) {
                    deferred.resolve({
                        success: true,
                        message: response.message
                    });
                } else {
                    deferred.resolve({
                        success: false,
                        message: response.message
                    });
                }
            })
            .error(function(data) {
                deferred.reject(data);
            });
        return deferred.promise;
	}
    this.getById = function(id){
        var deferred = $q.defer();
        $http({
                url: 'getJobById',
                method: "POST",
                data:id
            }).success(function(response) {
                if (response.success) {
                    deferred.resolve({
                        success: true,
                        data:response.data,
                        message: response.message
                    });
                } else {
                    deferred.resolve({
                        success: false,
                        message: response.message
                    });
                }
            })
            .error(function(data) {
                deferred.reject(data);
            });
        return deferred.promise;
    }
    this.getLatest = function(){
        var deferred = $q.defer();
        $http({
                url: 'getLatestJobs',
                method: "GET"
            }).success(function(response) {
                if (response.success) {
                    deferred.resolve({
                        success: true,
                        data:response.data,
                        message: response.message
                    });
                } else {
                    deferred.resolve({
                        success: false,
                        message: response.message
                    });
                }
            })
            .error(function(data) {
                deferred.reject(data);
            });
        return deferred.promise;
    }
    this.search = function(job){
        var deferred = $q.defer();
        $http({
                url: 'searchJobByParams',
                method: "POST",
                data:job
            }).success(function(response) {
                if (response.success) {
                    deferred.resolve({
                        success: true,
                        data:response.data
                    });
                } else {
                    deferred.resolve({
                        success: false
                    });
                }
            })
            .error(function(data) {
                deferred.reject(data);
            });
        return deferred.promise;
    }
    
});