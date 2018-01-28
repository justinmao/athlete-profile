angular
  .module('profileService', [])
  .service('ProfileService', ProfileService);

function ProfileService() {

  // Initialize profile values
  var profileData = {
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
    // TODO: Submit profile to backend
  }

  this.retrieveAllProfiles = function() {
    // TODO: Get all previously-created profiles
  }

}
