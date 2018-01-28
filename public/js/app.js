// Load profile modules - should be in its own file in a larger project
angular.module('athleteProfile', [
  'basicsController'
]);

angular.module('app', [
  'ngRoute',
  'appRoutes',
  'athleteProfile'
]);
