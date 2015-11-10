app.controller('EventCtrl', function($scope,$state,$eventService,$mdDialog) {
    $scope.message = '';
    $scope.event = {};
    $scope.total = function(){
        return parseInt($scope.event.cost,10)* $scope.event.number_of_ticket;
    }
    $scope.expand = function(e, event) {
        e.preventDefault();
        angular.forEach($scope.events, function(e) {
            e.selected = false;
        });
        event.selected = true;
    };
    $scope.donate = function(event,ev){
        $scope.event =  event;
        $scope.message = '';
        $mdDialog.show({
            //controller: DialogController,
            templateUrl: 'views/partials/events.donate.html',
            scope: $scope.$new(),
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        });
    }
    $scope.buy_ticket = function(event,ev){
        $scope.event =  event;
        $scope.message = '';
        $mdDialog.show({
            //controller: DialogController,
            templateUrl: 'views/partials/events.buy_ticket.html',
            scope: $scope.$new(),
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        });
    }
    $scope.pledge = function(event) {

        $eventService.pledge(event).then(function(data) {
            if (data.success) {
                $scope.message = data.message;
                $scope.event = {};
            } else {
                $scope.message = data.message;
            }
        }, function(message) {
            $scope.message = data.message;
        });
    };
    $scope.purchaseTicket = function(event) {
        $eventService.buy_ticket(event).then(function(data) {
            if (data.success) {
                $scope.message = data.message;
                $scope.event = {};
            } else {
                $scope.message = data.message;
            }
        }, function(message) {
            $scope.message = data.message;
        });
    };
    $scope.getEvent = function(){
        $eventService.getLatest().then(function(data) {
            if (data.success) {
                $scope.message = data.message;
                $scope.events = data.data;
            } else {
                $scope.showAlert('No event found!');
            }
        }, function(message) {
            $scope.showAlert('ERROR!');
        });
    };
    function getLatestEvent(){
       // if($state.current.name == 'admin'){
            $scope.getEvent();            
        //}
    } 
    getLatestEvent(); 
    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };
    /*function DialogController($scope, $mdDialog) {

        $scope.hide = function() {
        $mdDialog.hide();
        };
        $scope.cancel = function() {
        $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
        $mdDialog.hide(answer);
        };
    }*/
});
