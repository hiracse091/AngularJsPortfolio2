app.controller('MosqueCtrl', function($scope, $cordovaGeolocation) {
    var posOptions = {
        timeout: 10000,
        enableHighAccuracy: false
    };

    $scope.dynMarkers = [];
    $scope.$on('mapInitialized', function(event, map) {
        $cordovaGeolocation.getCurrentPosition(posOptions)
            .then(function(position) {
                map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
            });

        for (var i = 0; i < markers.length; i++) {
            var latLng = new google.maps.LatLng(markers[i].Latitude, markers[i].Longitude);
            $scope.dynMarkers.push(new google.maps.Marker({
                position: latLng,
                 icon: 'img/mosque.png',
                 label: markers[i].Location,
            }));
        }
        $scope.markerClusterer = new MarkerClusterer(map, $scope.dynMarkers, {});
    });
});
