var User = require('../models/user.js');

module.exports = function(req, res) {
  // res.json({"foo": "cool"});

  // var newUser = new User();
  // newUser.displayName = 'test tutu name';
  // newUser.email = 'email test'
  // newUser.save(function(err) {
  //   if (err) return next(err);
  // });

  // User.findOne({email: 'email test'}, function (err, data) {
  //   res.json(data);
  // });

  
  User.findOne({email: 'email test'}).exec()
    .then(function(data) {
      res.json(data);
    });
};