/**
 * Created by Asaan on 17/01/2018.
 */
(function (app) {
    app.directive('validatePassword', function ($parse) {
        let directive = {
            restrict: 'A',
            require: 'ngModel',
            link: validatePassword,
        };

        return directive;

        function validatePassword(scope, elem, attrs, ctrl) {
            if (!ctrl) return;
            var strongRegularExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
            var mediumRegularExp = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

            scope.$watch(attrs.ngModel, function (value) {
                if (!value) return;

                if (strongRegularExp.test(value)) {
                    $parse(attrs.validatePassword).assign(scope,"strong");
                    ctrl.$setValidity('password',true)

                } else if (mediumRegularExp.test(value)) {
                    $parse(attrs.validatePassword).assign(scope,"medium");
                    ctrl.$setValidity('password',true)

                } else {
                    $parse(attrs.validatePassword).assign(scope,"weak");
                    ctrl.$setValidity('password',false)

                }
            });
        }
    })
})(app);