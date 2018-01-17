/**
 * Created by Asaan on 17/01/2018.
 */

(function (app) {
    app.controller('SigninController',function ($scope) {
        $scope.submitForm = function(){
            if($scope.signinForm && $scope.signinForm.$valid){
                alert(JSON.stringify($scope.formData));
            }else{
                alert("Please correct all the errors")
            }
        };
    })
})(app);