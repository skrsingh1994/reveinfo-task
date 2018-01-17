/**
 * Created by Asaan on 17/01/2018.
 */
(function (app) {
    app.directive('validateEmail', function () {
        let directive = {
            restrict: 'A',
            require: 'ngModel',
            link: validateEmailDirective
        };

        return directive;

        function validateEmailDirective(scope, elem, attrs, ctrl) {
            if (!ctrl) return;
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            scope.$watch(attrs.ngModel, function (v) {
                if (!v) return;
                let isValidEmail = re.test(v.toLowerCase());
                ctrl.$setValidity('emailvalid',isValidEmail)
            });
        }
    })
})(app);