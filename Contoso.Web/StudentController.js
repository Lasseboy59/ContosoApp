
angular.module("contosoApp").controller("StudentController", function ($scope, $http) {
    $scope.whatisjavascript = "Javascript is like a wife!";
    $scope.whatisangularjs = "AngularJs is like a girlfriend";
    
    $scope.saveStudent = function(data) {

        // $http.get("http://localhost:55742/call-my-api/1", data).then(function(response) {

        $http.post("http://localhost:55742/contoso/student", data).then(function(response) {
            console.log(response);
        });
    }


});