angular
  .module('summaryController', [])
  .controller('SummaryCtrl', ['$scope', 'ProfileService', SummaryCtrl]);

function SummaryCtrl($scope, ProfileService) {

  $scope.profile = ProfileService.getProfile();

  $scope.submitProfile = function() {
    ProfileService.submitProfile();
  }

}
