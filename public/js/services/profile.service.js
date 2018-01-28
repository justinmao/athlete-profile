angular
  .module('profileService', [])
  .service('ProfileService', ['$http', '$q', '$rootScope', ProfileService]);

function ProfileService($http, $q, $rootScope) {

  // Paging system
  var pagingInfo = {
    'basics': { active: false, completed: false },
    'sports': { active: false, completed: false },
    'details': { active: false, completed: false },
    'summary': { active: false, completed: false }
  }

  this.getPagingInfo = function() {
    return pagingInfo;
  }

  this.subscribeToPaging = function(scope, callback) {
    $rootScope.$on('paging-event', callback);
  }

  this.setActivePage = function(pageName) {
    // Set all actives to false
    for (var page in pagingInfo) {
      pagingInfo[page].active = false;
    }
    // Set active page
    pagingInfo[pageName].active = true;
    // Notify observers
    $rootScope.$emit('paging-event');
  }

  this.setPageCompleted = function(pageName) {
    pagingInfo[pageName].completed = true;
  }

  // Data system
  this.setBasics = function(data) {
    console.log(profileData.basics);
    profileData.basics = data;
    console.log(profileData.basics);
  }

  this.setSports = function(data) {
    profileData.sports = data;
  }

  this.setDetails = function(data) {
    profileData.details = data;
  }

  this.getBasics = function() {
    return profileData.basics;
  }

  this.getSports = function() {
    return profileData.sports;
  }

  this.getDetails = function() {
    return profileData.details;
  }

  this.getProfile = function() {
    return profileData;
  }

  // Backend connection
  this.submitProfile = function() {
    $http.post('/api/profiles', JSON.stringify(profileData)).then(
      // TODO: Handle responses
      function success(response) {},
      function error(response) {}
    );
  }

  this.retrieveAllProfiles = function(scope, callback) {
    $http.get('/api/profiles').then(
      function(res) {
        callback(res.data);
      }
    );
  }

  resetProfile = function() {
    profileData = {
      'basics': {
        'name': '',
        'dob': new Date(),
        'nationality': '',
        'location': '',
        'gender': '',
        'maritalStatus': ''
      },
      'sports': [{}],
      'details': {
        'about': '',
        'interests': [],
        'charities': [],
        'pets': false,
        'alcohol': false
      }
    }
  }

  resetProfile();

}
