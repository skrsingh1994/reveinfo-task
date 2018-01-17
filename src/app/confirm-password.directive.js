/**
 * Created by Asaan on 17/01/2018.
 */
(function (app) {
    app.directive('confirmPassword', function ($parse) {
        let directive = {
            restrict: 'A',
            require: 'ngModel',
            link: validatePassword,
        };

        return directive;

        function validatePassword(scope, elem, attrs, ngModel) {
            if (!ngModel) return;

            scope.$watch(attrs.ngModel, function (val) {
                // console.log('model changed',val);
                validate();
            });

            attrs.$observe('confirmPassword', function (val) {
                // console.log('attribute changed',val);
                validate();
            });

            var validate = function () {
                // values
                var val1 = ngModel.$viewValue;
                var val2 = attrs.confirmPassword;

                console.log(val1,val2,val1 === val2)
                // set validity
                ngModel.$setValidity('passwordmatch', val1 === val2);
            };
        }
    })
})(app);