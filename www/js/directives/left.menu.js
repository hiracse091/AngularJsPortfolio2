app.directive('leftMenu', function() {
    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'views/partials/left.menu.html',
        link: function(scope, elem) {
            scope.replace = function() {
                elem.replaceWith(elem.children());
            };
        }
    };
});
