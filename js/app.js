angular.module('employeeApp', [])
    .controller('EmployeeController', ['EmployeeService', function(EmployeeService) {
        const vm = this; 
        vm.employees = []; 
        vm.selectedEmployee = null;

        EmployeeService.getEmployees().then(function(response) {
            vm.employees = response.data;
        });

        vm.selectEmployee = function(employee) {
            vm.selectedEmployee = employee; 
        };

        vm.deleteEmployee = function() {
            const confirmation = confirm('Are you sure you want to delete this record?');
            if (confirmation) {
                const index = vm.employees.indexOf(vm.selectedEmployee);
                if (index > -1) {
                    vm.employees.splice(index, 1);
                }
                vm.selectedEmployee = null;
            }
        };

    }]);