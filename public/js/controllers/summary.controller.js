angular
  .module('summaryController', [])
  .controller('SummaryCtrl', ['$scope', '$location', 'ProfileService', SummaryCtrl]);

function SummaryCtrl($scope, $location, ProfileService) {

  $scope.profile = ProfileService.getProfile();

  $scope.submitProfile = function() {
    ProfileService.submitProfile();
    $location.path('/list');
  }

  $scope.reset = function() {
    ProfileService.setActivePage('summary');
  }

  $scope.edit = function(path) {
    $location.path(path);
  }

  $scope.reset();

}
