/**
 * Created by Asaan on 17/01/2018.
 */
(function (app) {
    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('register', {
                url: '/',
                templateUrl: 'src/app/register.html',
                controller:"SignupController"
            })
            .state('login', {
                url: '/login',
                templateUrl: 'src/app/login.html',
                controller:"SigninController"
            })
    })
})(app)
