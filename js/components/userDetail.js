
angular.module('employeeApp').component('userDetail', {
    transclude: true,
    bindings: { 
        employee: '<', 
        onDelete: '&'        
    },
    template: `
        <div class="modal show d-block" ng-if="$ctrl.employee">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h4 class="modal-title">User Details</h4>
                        <button type="button" class="btn-close" ng-click="$ctrl.employee = null">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p><strong>Username:</strong> {{$ctrl.employee.username}}</p>
                        <p><strong>Name:</strong> {{$ctrl.employee.name}}</p>
                        <p><strong>Email:</strong> {{$ctrl.employee.email}}</p>
                        <p><strong>Website:</strong> {{$ctrl.employee.website}}</p>
                        <p><strong>Phone:</strong> {{$ctrl.employee.phone}}</p>
                        <p><strong>Address:</strong> 
                            {{$ctrl.employee.address.street}}, 
                            {{$ctrl.employee.address.city}}
                        </p>
                        <div ng-transclude></div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-danger" ng-click="$ctrl.onDelete()">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    `
});
