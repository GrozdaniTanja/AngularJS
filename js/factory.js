angular.module('employeeApp').factory('EmployeeService', ['$http', function($http) {
    const API_URL = 'https://jsonplaceholder.typicode.com/users';

    return {
        getEmployees: function() {
            return $http.get(API_URL);
        }
    };
}]);
