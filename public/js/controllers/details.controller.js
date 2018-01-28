angular
  .module('detailsController', [])
  .controller('DetailsCtrl', ['$scope', '$location', 'ProfileService', DetailsCtrl]);

function DetailsCtrl($scope, $location, ProfileService) {

  $scope.addInterest = function() {
    $scope.data.interests.push({});
  }

  $scope.deleteInterest = function(interest) {
    var i = $scope.data.interests.indexOf(interest);
    $scope.data.splice(i, 1);
  }

  $scope.addCharity = function() {
    $scope.data.charities.push({});
  }

  $scope.deleteCharity = function(charity) {
    var i = $scope.data.charities.indexOf(charity);
    $scope.data.splice(i, 1);
  }

  $scope.save = function(isValid) {
    if (isValid) {
      ProfileService.setDetails($scope.data);
      $location.path('/summary');
    }
  }

  $scope.reset = function() {
    $scope.data = ProfileService.getDetails();
    ProfileService.setActivePage('details');
  }

  // Reset to saved values upon re-entry
  $scope.reset();

}
