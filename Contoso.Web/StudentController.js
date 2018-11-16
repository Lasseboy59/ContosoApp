
angular.module("contosoApp").controller("StudentController", function ($scope, $http, $resource, $stateParams, toastr) {

    var studentService = $resource("http://localhost:55742/contoso/student", {},
        {
            get: { method: "GET" },
            save: { method: "POST" },
            getById: { method: "GET", params: { id: '@id' } },
            remove: { method: "DELETE" },
            update: { method: "PUT" }
        });
    
    $scope.saveStudent = function (data) {
        studentService.save(data);
    }

    $scope.getStudents = function() {
        $scope.students = studentService.query();
    }

    $scope.getStudentById = function() {
        $scope.student = studentService.getById({ id: $stateParams.studentId });
    }

    $scope.updateStudent = function (student) {
        studentService.update(student);
    }

    $scope.deleteStudent = function (studentId) {
        $http.delete("http://localhost:55742/contoso/student/" + studentId).then(function(response) {
            console.log(response);
        });
    }
});