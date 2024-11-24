angular.module('employeeApp').directive('onLongPress', ['$timeout', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            let timer;

            element.on('mousedown', function() {
                timer = $timeout(function() {
                    console.log('Long press detected!');
                }, 1000);
            });


            element.on('mouseup mouseleave', function() {
                $timeout.cancel(timer);
            });
        }
    };
}]);