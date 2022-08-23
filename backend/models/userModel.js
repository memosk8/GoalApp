const 
  mongoose = require('mongoose'),
  userSchema = mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Please add a name']
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Please add your password']
    },
    // admin: {
    //   type: Boolean,
    //   required: [true, 'Please select user level']
    // }
  }, {timestamps: true});

module.exports = mongoose.model('User', userSchema);