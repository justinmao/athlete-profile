angular
  .module('appRoutes', [])
  .config(['$routeProvider', '$locationProvider', appRoutes]);

function appRoutes($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/basics.html',
      controller: 'BasicsCtrl'
    })
    .when('/sports', {
      templateUrl: 'views/sports.html',
      controller: 'SportsCtrl'
    })
    .when('/details', {
      templateUrl: 'views/details.html',
      controller: 'DetailsCtrl'
    })
    .when('/summary', {
      templateUrl: 'views/summary.html',
      controller: 'SummaryCtrl'
    })
    .when('/list', {
      templateUrl: 'views/list.html',
      controller: 'ListCtrl'
    });
  $locationProvider.html5Mode(true);
}
