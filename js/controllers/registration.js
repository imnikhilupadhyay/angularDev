myApp.controller('RegistrationController',['$scope','$http','$location',function($scope,$http,$location){
  
 
  $scope.login = function(){
    $scope.message="Welcome "+$scope.user.email;
  };

 
  $scope.register = function(){
    $scope.message="Hi "+$scope.user.firstname+" "+$scope.user.lastname+", Thanks for registering!!";
    $http({
      url:'/api/user/register',//http will send front-end routing to api.js
      method:'POST',
      data:{
        firstName:$scope.user.firstname,
        lastName:$scope.user.lastname,
        email:$scope.user.email,
        password:$scope.user.password
      }
    }).then(function(success){
      console.log(success);
    },function(error){
      alert(error.status)
    })
  };
}]);