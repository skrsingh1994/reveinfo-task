/**
 * Created by Asaan on 17/01/2018.
 */
(function (app) {
    app.directive('validateUsername', function () {
        let directive = {
            restrict: 'A',
            require: 'ngModel',
            link: validateUsername
        };

        return directive;

        function validateUsername(scope, elem, attrs, ctrl) {
            if (!ctrl) return;
            const re = /^([a-zA-Z0-9]){4,}$/;
            scope.$watch(attrs.ngModel, function (v) {
                if (!v) return;
                let isValidUsername = re.test(v.toLowerCase());
                ctrl.$setValidity('password',isValidUsername)
            });
        }
    })
})(app);