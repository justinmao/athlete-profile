angular
  .module('basicsController', [])
  .controller('BasicsCtrl', ['$scope', BasicsCtrl]);

function BasicsCtrl($scope) {

  $scope.genderList = [
    'Male',
    'Female',
    'Other'
  ];

}
