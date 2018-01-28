var mongoose = require('mongoose');

module.exports = mongoose.model('AthleteProfile', {
  basics: {
    name: String,
    dob: Date,
    nationality: String,
    location: String,
    gender: String,
    maritalStatus: String
  },
  sports: [{
    name: String,
    association: String,
    team: String
  }],
  details: {
    about: String,
    interests: [{
      name: String
    }],
    charities: [{
      name: String,
      years: Number
    }],
    pets: Boolean,
    alcohol: Boolean
  }
});
