app.service('$eventService', function($q, $http, $window) {
	this.create = function(data){
		var deferred = $q.defer();
		$http({
                url: 'test',
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
                url: 'getEventById',
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
                url: 'getLatestEvents',
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
    this.pledge = function(event){
        var deferred = $q.defer();
        $http({
                url: 'pledge',
                method: "POST",
                data: event
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
    this.buy_ticket = function(event){
        var deferred = $q.defer();
        $http({
                url: 'buy_ticket',
                method: "POST",
                data: event
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

    
});