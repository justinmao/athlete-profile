var AthleteProfile = require('./models/AthleteProfile');

module.exports = function(app) {
  app.get('/api/profiles', function(req, res) {
    AthleteProfile.find({}, function(err, profiles) {
      res.send(profiles);
    });
  });
  app.post('/api/profiles', function(req, res) {
    var profile = new AthleteProfile(req.body);
    profile.save()
      .then(item => {
        res.send("Profile successfully saved!");
      })
      .catch(err => {
        res.status(400).send("Failed to save profile.");
      });
  });
};
