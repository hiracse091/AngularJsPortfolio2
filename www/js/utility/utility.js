app.factory('$utility', function($cordovaToast, $cordovaNetwork, $cordovaDevice, $state, $mdToast) {
    return {
        show: function(message) {
            if ($cordovaDevice.getPlatform() == "Android") {
                return $cordovaToast.show(message, 'short', 'bottom');
            }
            return $mdToast.show(
                $mdToast.simple()
                .content(message)
                .position('bottom left right')
                .hideDelay(3000)
            );
        },
        redirect: function(state, data) {
            $state.go(state, data);
        },
        isOffline: function() {
            if (ionic.Platform.isAndroid())
                return $cordovaNetwork.getNetwork() == Connection.NONE;
            else
                return true;
        },
        guid: function() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        }
    };
});
