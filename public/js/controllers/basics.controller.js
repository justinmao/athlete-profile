angular
  .module('basicsController', [])
  .controller('BasicsCtrl', ['$scope', '$location', 'ProfileService', BasicsCtrl]);

function BasicsCtrl($scope, $location, ProfileService) {

  $scope.genderList = [
    'Male',
    'Female',
    'Other'
  ];

  $scope.maritalStatusList = [
    'Single',
    'Married',
    'Common Law',
    'Separated',
    'Divorced',
    'Widowed'
  ];

  $scope.save = function(isValid) {
    if (isValid) {
      ProfileService.setBasics($scope.data);
      ProfileService.setPageCompleted('basics');
      $location.path('/sports');
    }
  }

  var reset = function() {
    $scope.data = ProfileService.getBasics();
    ProfileService.setActivePage('basics');
  }

  // Reset to saved values upon re-entry
  reset();

}
