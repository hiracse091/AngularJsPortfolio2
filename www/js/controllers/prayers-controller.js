app.controller('PrayerCtrl', function($scope, $cordovaGeolocation, $settingService) {
    var posOptions = {
            timeout: 10000,
            enableHighAccuracy: false
        },

        salats = [{
            name: 'Imsak',
            time: '--:--',
            alarm: false,
            waqt: 'imsak'
        }, {
            name: 'Fajr',
            time: '--:--',
            alarm: false,
            waqt: 'fajr'
        }, {
            name: 'Sunrise',
            time: '--:--',
            alarm: false,
            waqt: 'sunrise'
        }, {
            name: 'Dhuhr',
            time: '--:--',
            alarm: false,
            waqt: 'dhuhr'
        }, {
            name: 'Asr',
            time: '--:--',
            alarm: false,
            waqt: 'asr'
        }, {
            name: 'Sunset',
            time: '--:--',
            alarm: false,
            waqt: 'sunset'
        }, {
            name: 'Maghrib',
            time: '--:--',
            alarm: false,
            waqt: 'maghrib'
        }, {
            name: 'Isha',
            time: '--:--',
            alarm: false,
            waqt: 'isha'
        }],
        alarms = $settingService.getAlarms();

    angular.forEach(salats, function(value, key) {
        if (alarms[key]) salats[key] = alarms[key];
    });

    $scope.salats = salats;

    $cordovaGeolocation.getCurrentPosition(posOptions)
        .then(function(position) {
            var times,
                lat = position.coords.latitude,
                lng = position.coords.longitude;

            prayTimes.setMethod('MWL');
            times = prayTimes.getTimes(new Date(), [lat, lng], 'auto', 'auto', '12h');

            angular.forEach($scope.salats, function(salat) {
                salat.time = times[salat.waqt];
            });
        }, function(err) {
            // error
        });
});
