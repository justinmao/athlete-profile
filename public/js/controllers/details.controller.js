angular
  .module('detailsController', [])
  .controller('DetailsCtrl', ['$scope', DetailsCtrl]);

function DetailsCtrl($scope) {
  $scope.msg = 'Details Controller';
}
