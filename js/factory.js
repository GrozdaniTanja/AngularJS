angular.module('employeeApp').factory('EmployeeService', ['$http', function($http) {
    const API_URL = environment.apiUrl;

    return {
        getEmployees: function() {
            return $http.get(API_URL);
        }
    };
}]);
