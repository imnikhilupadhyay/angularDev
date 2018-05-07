myApp.controller('RegistrationController',['$scope',function($scope){
  
 
  $scope.login = function(){
    $scope.message="Welcome "+$scope.user.email;
  };

  $scope.register = function(){
      $scope.message="Hi "+$scope.user.firstname+" "+$scope.user.lastname+", Thanks for registering!!";
    };
}]);