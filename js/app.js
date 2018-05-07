var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/login',{
     templateUrl: 'view/login.html',
     controller:'RegistrationController'
    }).
    when('/register',{
     templateUrl: '/view/register.html',
     controller:'RegistrationController'
    }).
    when('/success',{
     templateUrl: '/view/success.html',
     controller:'SuccessController'
    }).
    otherwise({
      redirectTo:'/login'
    });
}])