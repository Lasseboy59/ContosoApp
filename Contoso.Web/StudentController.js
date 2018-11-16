
angular.module("contosoApp").controller("StudentController", function ($scope, $http, $resource, $stateParams, toastr) {

    var formData = new FormData();

    $scope.getTheStudentPhoto = function ($files) {
        angular.forEach($files,
            function(value, key) {
                formData.append(key, value);
            });
    }

    var uploadStudentPhoto = function(studentId) {
        var studentPhotoObj = {
            method: "post",
            url: "http://localhost:55742/api/upload-student-photo/" + studentId,
            data: formData, 
            headers: {
                'Content-type': undefined
            }
        }
        $http(studentPhotoObj);
    };

    var studentService = $resource("http://localhost:55742/contoso/student", {},
        {
            get: { method: "GET" },
            save: { method: "POST" },
            getById: { method: "GET", params: { id: '@id' } },
            remove: { method: "DELETE" },
            update: { method: "PUT" }
        });

    /*
    $scope.saveStudent = function (data) {
        uploadStudentPhoto(response.data.Id);
        studentService.save(data);
    }
    */

    $scope.saveStudent = function (data) {
        $http.post("http://localhost:55742/contoso/student", data).then(function (response) {
            console.log(response);
            if (response.status === 200 || response.status === 201 && response.statusText === "Created") {
                uploadStudentPhoto(response.data.Id);
                toastr.success("Student information is saved successfully!");
            }
        }, function (error) {
            if (error.status === 404) {
                toastr.error("API not found!");
            }

        });
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