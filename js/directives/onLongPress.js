angular.module('employeeApp').directive('onLongPress', ['$timeout', function($timeout) {
    return {
        restrict: 'A', 
        link: function(scope, element) {
            let timer;
            const LONG_PRESS_DELAY = 1000;  

            element.on('mousedown', function() {
                timer = $timeout(function() {
                    console.log('Long press detected!');
                }, LONG_PRESS_DELAY);
            });

            element.on('mouseup mouseleave', function() {
                $timeout.cancel(timer);
            });

            element.on('touchstart', function() {
                timer = $timeout(function() {
                    console.log('Long press detected!');
                }, LONG_PRESS_DELAY);
            });

            element.on('touchend touchcancel', function() {
                $timeout.cancel(timer);
            });

            element.on('$destroy', function() {
                $timeout.cancel(timer);
            });
        }
    };
}]);
