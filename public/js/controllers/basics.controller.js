angular
  .module('basicsController', [])
  .controller('BasicsCtrl', ['$scope', BasicsCtrl]);

function BasicsCtrl($scope) {
  $scope.msg = 'Basics Controller';
}
