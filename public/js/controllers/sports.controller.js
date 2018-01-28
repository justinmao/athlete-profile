angular
  .module('sportsController', [])
  .controller('SportsCtrl', ['$scope', SportsCtrl]);

function SportsCtrl($scope) {
  $scope.msg = 'Sports Controller';
}
