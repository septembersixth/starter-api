var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  email : String,
  password: String,
  googleId: String,
  facebookId: String,
  displayName: String,
  active: Boolean
});

UserSchema.methods.toJSON = function(){
  var user = this.toObject();
  delete user.password;
  return user;
};

UserSchema.pre('save', function(next){
  var user = this;
  return next();
});

module.exports = mongoose.model('Users', UserSchema);
