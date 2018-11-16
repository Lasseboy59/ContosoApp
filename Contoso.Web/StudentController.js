
angular.module("contosoApp").controller("StudentController", function ($scope, $http, $stateParams, toastr) {
    //$scope.whatisjavascript = "Javascript is like a wife!";
    //$scope.whatisangularjs = "AngularJs is like a girlfriend";
    
    $scope.saveStudent = function(data) {

        // $http.get("http://localhost:55742/call-my-api/1", data).then(function(response) {

        $http.post("http://localhost:55742/contoso/student", data).then(function(response) {
            console.log(response);
            if (response.status === 200 || response.status === 201 && response.statusText === "Created") {
                toastr.success("Student information is saved successfully!");
            }
        }, function (error) {
            if (error.status === 404) {
                toastr.error("API not found!");
            }

        });
    }

    $scope.getStudents = function() {
        $http.get("http://localhost:55742/contoso/student").then(function(response) {
            $scope.students = response.data;
            console.log(response);
        });
    }

    $scope.getStudentById = function() {
        $http.get("http://localhost:55742/contoso/student/" + $stateParams.studentId).then(function(response) {
            $scope.student = response.data;
            console.log(response);
        });
    }

    $scope.updateStudent = function (student) {
        $http.put("http://localhost:55742/contoso/student/" + $stateParams.studentId, student).then(function(response) {
            console.log(response);
        });

    }

    $scope.deleteStudent = function (studentId) {
        $http.delete("http://localhost:55742/contoso/student/" + studentId).then(function(response) {
            console.log(response);
        });
    }
});