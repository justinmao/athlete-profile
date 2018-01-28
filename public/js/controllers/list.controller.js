angular
  .module('listController', [])
  .controller('ListCtrl', ['$scope', 'ProfileService', ListCtrl]);

function ListCtrl($scope, ProfileService) {

  ProfileService.retrieveAllProfiles($scope, function(data) {
    $scope.profiles = data;
    console.log(data);
  });
  
}
