const mongoose = require('mongoose');

const contact = new mongoose.Schema({
    firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email"]
  },
  favoriteColor: {
    type: String,
    // enum: ["Red", "Blue", "Green", "Black", "White", "Yellow"], // optional restriction
    default: "Black"
  },
  birthday: {
    type: String, // keep simple
    required: [true, "Birthday is required"]
  }
},
{ timestamps: true });

module.exports = mongoose.model('Contact', contact);
