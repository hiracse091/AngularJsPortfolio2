app.service('$registerService', function($q, $http, $window) {
	this.create = function(data){
		var deferred = $q.defer();
		$http({
                url: 'addNewMember',
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
                url: 'getMemberById',
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
    
});