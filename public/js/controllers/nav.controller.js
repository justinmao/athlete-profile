angular
  .module('navController', [])
  .controller('NavCtrl', ['$scope', 'ProfileService', NavCtrl]);

function NavCtrl($scope, ProfileService) {

  ProfileService.subscribeToPaging($scope, function() {
    $scope.pagingInfo = ProfileService.getPagingInfo();
  });

}
