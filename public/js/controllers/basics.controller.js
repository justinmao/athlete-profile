angular
  .module('basicsController', [])
  .controller('BasicsCtrl', ['$scope', 'ProfileService', BasicsCtrl]);

function BasicsCtrl($scope, ProfileService) {

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

  $scope.save = function(data) {
    ProfileService.setBasics(data);
  }

  var reset = function() {
    $scope.data = ProfileService.getBasics();
    ProfileService.setActivePage('basics');
  }

  // Reset to saved values upon re-entry
  reset();

}
