
angular.module("contosoApp").controller("StudentController", function ($scope, $http, $stateParams) {
    $scope.whatisjavascript = "Javascript is like a wife!";
    $scope.whatisangularjs = "AngularJs is like a girlfriend";
    
    $scope.saveStudent = function(data) {

        // $http.get("http://localhost:55742/call-my-api/1", data).then(function(response) {

        $http.post("http://localhost:55742/contoso/student", data).then(function(response) {
            console.log(response);
        });
    }

    $scope.getStudents = function() {
        $http.get("http://localhost:55742/contoso/student").then(function(response) {
            $scope.students = response.data;
        });
    }

    $scope.getStudentById = function() {
        $http.get("http://localhost:55742/contoso/student/" + $stateParams.studentId).then(function(response) {
            $scope.student = response.data;
        });
    }

    $scope.updateStudent = function(student) {
        $http.put("http://localhost:55742/contoso/student", student);
    }

    $scope.deleteStudent = function (studentId) {
        $http.delete("http://localhost:55742/contoso/student/" + studentId);
    }
});