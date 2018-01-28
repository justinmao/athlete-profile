angular
  .module('summaryController', [])
  .controller('SummaryCtrl', ['$scope', SummaryCtrl]);

function SummaryCtrl($scope) {
  $scope.msg = 'Summary Controller';
}
