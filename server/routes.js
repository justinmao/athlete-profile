var AthleteProfile = require('./models/AthleteProfile');

module.exports = function(app) {
  app.get('/api/profiles', function(req, res) {
    res.send("hello!");
  });
  app.post('/api/profiles', function(req, res) {
    console.log(req.body);
  });
};
