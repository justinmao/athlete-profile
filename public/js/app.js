// Load profile modules - should be in its own file in a larger project
angular.module('athleteProfile', [
  'basicsController',
  'sportsController',
  'detailsController',
  'summaryController',
  'profileService',
]);

angular.module('app', [
  'ngRoute',
  'appRoutes',
  'athleteProfile'
]);
