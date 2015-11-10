app.service('$settingService', function($q, $http, $window) {
    this.setAlarms = function(waqt, value) {
        var alarms = angular.fromJson($window.localStorage.getItem("alarms")) || {
            fajr: false,
            dhuhr: false,
            asr: false,
            maghrib: false,
            isha: false
        };
        alarm[waqt] = value;
        return $window.localStorage.setItem(angular.toJson(alarm));
    };
    this.getAlarms = function() {
        return angular.fromJson($window.localStorage.getItem("alarms")) || {
            fajr: false,
            dhuhr: false,
            asr: false,
            maghrib: false,
            isha: false
        };
    };
});
