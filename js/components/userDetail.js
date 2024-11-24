angular.module('employeeApp').component('popup', {
    transclude: true,
    bindings: { 
        title: '@', 
        onClose: '&' 
    },
    template: `
        <div class="modal show d-block">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h4 class="modal-title">{{$ctrl.title}}</h4>
                        <button type="button" class="btn-close" ng-click="$ctrl.onClose()">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div ng-transclude></div>
                    </div>
                </div>
            </div>
        </div>
    `
});
