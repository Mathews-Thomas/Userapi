const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    validate: {
      validator: (email) => validator.isEmail(email),
      message: 'Invalid email format',
    },
  },
  age: {
    type: Number,
    min: [0, 'Age must be at least 0'],
    required: [true, 'Age is required'],
  },
});

module.exports = mongoose.model('User', userSchema);