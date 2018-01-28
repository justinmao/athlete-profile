angular
  .module('profileService', [])
  .service('ProfileService', ['$http', '$q', ProfileService]);

function ProfileService($http, $q) {

  this.setBasics = function(data) {
    profileData.basics = data;
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
