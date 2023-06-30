const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  socials: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  imageOne: {
    type: String,
    require: true,
  },
  imageTwo: {
    type: String,
    require: true,
  },
  cloudinaryIdOne: {
    type: String,
    require: true,
  },
  cloudinaryIdTwo: {
    type: String,
    require: true,
  },
  street: {
    type: String,
    required: true,
  },
  appt:{
    type: String,
  
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
