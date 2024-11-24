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

    }]);