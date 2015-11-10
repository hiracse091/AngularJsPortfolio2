app.controller('AppCtrl', ['$rootScope','$scope', '$mdBottomSheet', '$mdSidenav', '$mdDialog', '$location','$q', function($rootScope,$scope, $mdBottomSheet, $mdSidenav, $mdDialog, $location,$q) {

    $scope.showAddButton = false;
    
    $scope.selectedIndex = 0;

    $scope.$watch('selectedIndex', function(current, old) {
        switch (current) {
            case 0:
                $location.url("/prayers");
                break;
            case 1:
                $location.url("/events");
                break;
            case 2:
                $location.url("/mosques");
                break;
        }
    });

    // Toolbar search toggle
    $scope.toggleSearch = function(element) {
        $scope.showSearch = !$scope.showSearch;
    };

    // Sidenav toggle
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
    function closeSideMenu() {
        var pending = $mdBottomSheet.hide() || $q.when(true);

        pending.then(function(){
            $mdSidenav('left').close();
        });
    }
    $rootScope.$on('$locationChangeSuccess', function () {
        closeSideMenu();
    });
    // Menu items
    $scope.menu = [{
        link: '',
        title: 'Login',
        icon: 'action:ic_dashboard_24px'
    }, {
        link: '',
        title: 'Messages',
        icon: 'communication:ic_message_24px'
    }, {
        link: '#/register',
        title: 'Registration',
        icon: 'social:ic_person_24px'
    }, {
        link: '#/transaction_history',
        title: 'AMUT System',
        icon: 'action:ic_payment_24px'
    },{
        link: '#/job/search',
        title: 'Posted jobs',
        icon: 'action:ic_payment_24px'
    }];

    $scope.admin = [{
        link: '',
        title: 'Mosques',
        icon: 'action:ic_settings_24px'
    }, {
        link: '#/admin/events',
        title: 'Events',
        icon: 'action:ic_settings_24px'
    }, {
        link: 'showListBottomSheet($event)',
        title: 'Settings',
        icon: 'action:ic_settings_24px'
    }];

    // Bottomsheet & Modal Dialogs
    $scope.alert = '';
    $scope.showListBottomSheet = function($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
            template: '<md-bottom-sheet class="md-list md-has-header"><md-list><md-list-item class="md-2-line" ng-repeat="item in items" role="link" md-ink-ripple><md-icon md-svg-icon="{{item.icon}}" aria-label="{{item.name}}"></md-icon><div class="md-list-item-text"><h3>{{item.name}}</h3></div></md-list-item> </md-list></md-bottom-sheet>',
            controller: 'ListBottomSheetCtrl',
            targetEvent: $event
        }).then(function(clickedItem) {
            $scope.alert = clickedItem.name + ' clicked!';
        });
    };

    $scope.showAdd = function(ev) {
        $mdDialog.show({
                controller: DialogController,
                template: '<md-dialog aria-label="Form"> <md-content class="md-padding"> <form name="userForm"> <div layout layout-sm="column"> <md-input-container flex> <label>First Name</label> <input ng-model="user.firstName"> </md-input-container> <md-input-container flex> <label>Last Name</label> <input ng-model="user.lastName"> </md-input-container> </div> <md-input-container flex> <label>Message</label> <textarea ng-model="user.biography" columns="1" md-maxlength="150"></textarea> </md-input-container> </form> </md-content> <div class="md-actions" layout="row"> <span flex></span> <md-button ng-click="answer(\'not useful\')"> Cancel </md-button> <md-button ng-click="answer(\'useful\')" class="md-primary"> Save </md-button> </div></md-dialog>',
                targetEvent: ev,
            })
            .then(function(answer) {
                $scope.alert = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.alert = 'You cancelled the dialog.';
            });
    };

    function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    };
}]);
