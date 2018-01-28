angular
  .module('sportsController', [])
  .controller('SportsCtrl', ['$scope', 'ProfileService', SportsCtrl]);

function SportsCtrl($scope, ProfileService) {

  // TODO: Give each sport an id and disable already chosen sports
  $scope.sportsList = [
    'Golf',
    'Tennis',
    'Cricket',
    'Basketball',
    'Baseball',
    'American Football',
    'Aquatics',
    'Archery',
    'Automobile Racing',
    'Badminton',
    'Beach Volleyball',
    'Bobsleigh',
    'Body Building',
    'Boxing',
    'Cross Country Running',
    'Cross Country Skiing',
    'Curling',
    'Cycling',
    'Darts',
    'Decathlon',
    'Down Hill Skiing',
    'Equestrianism',
    'eSports',
    'Fencing',
    'Field Hockey',
    'Figure Skating',
    'Gymnastics',
    'Ice Hockey',
    'Martial Arts',
    'Mixed Martial Arts',
    'Modern Pentathlon',
    'Motorcycle Racing',
    'Netball',
    'Polo',
    'Racquetball',
    'Rowing',
    'Rugby',
    'Sailing',
    'Softball',
    'Shooting',
    'Skateboarding',
    'Skeet Shooting',
    'Skeleton',
    'Snow Boarding',
    'Soccer (Football)',
    'Squash',
    'Surfing',
    'Swimming',
    'Track and Field'
  ].sort();

  $scope.save = function(data) {
    ProfileService.setSports(data);
  }

  $scope.reset = function() {
    $scope.data = ProfileService.getSports();
  }

  $scope.addSport = function() {
    $scope.data.push({});
  }

  $scope.deleteSport = function(sport) {
    // Always retain at least one sport
    if ($scope.data.length > 1) {
      var i = $scope.data.indexOf(sport);
      $scope.data.splice(i, 1);
    }
  }

  // Reset to saved values upon re-entry
  $scope.reset();

}
