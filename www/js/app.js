var app = angular.module('StarterApp', ['ngMaterial', 'ngCordova', 'ui.router', 'ngMap', 'ngMockE2E']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/tab/dash');
    $stateProvider
        .state('prayers', {
            url: "/prayers",
            templateUrl: "views/partials/prayers.html",
            controller: "PrayerCtrl"
        })
        .state('mosques', {
            url: "/mosques",
            templateUrl: "views/partials/mosques.html",
            controller: "MosqueCtrl"
        })
        .state('events', {
            url: "/events",
            templateUrl: "views/partials/events.html",
            controller: "EventCtrl"
        })
        .state('job', {
            url: "/job",
            templateUrl: "views/job/job.html",
            controller: "JobCtrl"
        })        
        .state('job.create', {
            url: "^/job/create",
            templateUrl: "views/job/job.create.html",
            controller: "JobCtrl"
        })
        .state('job.search', {
            url: "^/job/search",
            templateUrl: "views/job/job.search.html",
            controller: "JobCtrl"
        })
        .state('job.bidJob', {
            url: "^/job/bidJob/:id",
            templateUrl: "views/job/job.bid_job.html",
            controller: "JobCtrl"
        })
        .state('job.message', {
            url: "^/job/message/:jobId",
            templateUrl: "views/job/job.message.html",
            controller: "JobCtrl"
        })
        .state('admin', {
            url: '/admin',
            templateUrl: 'views/admin/admin.html',
            controller: 'EventCtrl'                
        })
        .state('admin.events', {
            url: '^/admin/events',
            templateUrl: 'views/admin/admin.events.html',
            controller: 'EventCtrl'                
        })
        .state('admin.create_event', {
            url: "^/admin/events/create",
            templateUrl: 'views/admin/create.event.html',
            controller: 'CreateEventCtrl'          
        })
        .state('admin.edit_event', {
            url: "^/admin/events/edit/:id",
            templateUrl: 'views/admin/create.event.html',
            controller: 'CreateEventCtrl'
            
        })
        .state('register', {
            url: "/register",
            templateUrl: 'views/partials/registration.html',
            controller: 'RegistrationCtrl'            
        })
        .state('amut_system', {
            url: "/transaction_history",
            templateUrl: 'views/partials/transaction.html',
            controller: 'RegistrationCtrl'            
        });
});

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('blue');
});

app.config(function($mdIconProvider) {
    $mdIconProvider
        .iconSet('action', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-action.svg', 24)
        .iconSet('alert', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-alert.svg', 24)
        .iconSet('av', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-av.svg', 24)
        .iconSet('communication', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-communication.svg', 24)
        .iconSet('content', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-content.svg', 24)
        .iconSet('device', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-device.svg', 24)
        .iconSet('editor', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-editor.svg', 24)
        .iconSet('file', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-file.svg', 24)
        .iconSet('hardware', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-hardware.svg', 24)
        .iconSet('image', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-image.svg', 24)
        .iconSet('maps', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-maps.svg', 24)
        .iconSet('navigation', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-navigation.svg', 24)
        .iconSet('notification', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-notification.svg', 24)
        .iconSet('social', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-social.svg', 24)
        .iconSet('toggle', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-toggle.svg', 24)

    .iconSet('avatars', 'https://raw.githubusercontent.com/angular/material/master/docs/app/icons/avatar-icons.svg', 24)
        .defaultIconSet('https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-action.svg', 24);
});

