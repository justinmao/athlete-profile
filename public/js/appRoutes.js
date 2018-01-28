angular
  .module('appRoutes', [])
  .config(['$routeProvider', '$locationProvider', appRoutes]);

function appRoutes($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/basics.html',
      controller: 'BasicsCtrl'
    });
  $locationProvider.html5Mode(true);
}
