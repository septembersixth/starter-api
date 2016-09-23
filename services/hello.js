var User = require('../models/user.js');

module.exports = function(req, res) {
  var data = {
    "data": [
      {
        "header": "Before borrowing",
        "links": [
          {
            "title": "Things to consider if you need to borrow money",
            "url": "/money-to-borrow"
          },
          {
            "title": "About your Personal Application Limit",
            "url": "/personal-application-limit"
          },
          {
            "title": "What are same day loans and when could they help you?",
            "url": "/same-day-loans"
          },
          {
            "title": "Applying for Small Loans ?",
            "url": "/small-loans"
          }
        ]
      },

      {
        "header": "Before borrowing",
        "links": [
          {
            "title": "Things to consider if you need to borrow money",
            "url": "/money-to-borrow"
          },
          {
            "title": "About your Personal Application Limit djhdf",
            "url": "/personal-application-limit"
          },
          {
            "title": "What are same day loans and when could they help you?",
            "url": "/same-day-loans"
          },
          {
            "title": "Applying for Small Loans ?",
            "url": "/small-loans"
          },
          {
            "title": "About your Personal Application Limit",
            "url": "/personal-application-limit"
          },
          {
            "title": "What are same day loans and when could they help you?",
            "url": "/same-day-loans"
          },
          {
            "title": "Applying for Small Loans ?",
            "url": "/small-loans"
          }
        ]
      }
    ]
  };
  res.json(data);

  // var newUser = new User();
  // newUser.displayName = 'test tutu name';
  // newUser.email = 'email test'
  // newUser.save(function(err) {
  //   if (err) return next(err);
  // });

  // User.findOne({email: 'email test'}, function (err, data) {
  //   res.json(data);
  // });


  // User.findOne({email: 'email test'}).exec()
  //   .then(function(data) {
  //     res.json(data);
  //   });
};