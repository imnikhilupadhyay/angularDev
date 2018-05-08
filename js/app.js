var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
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
    when('/json',{
      templateUrl:'/view/json.html'
    }).
    otherwise({
      redirectTo:'/login'
    });

    //$locationProvider.html5Mode(true);
}])