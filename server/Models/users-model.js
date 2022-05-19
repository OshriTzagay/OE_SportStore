const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    UserName: { type: String, required: true },

    Age: { type: Number },

    Email: { type: String, required: true, unique: true },

    Password: { type: String, required: true },

    LastLogin: { type: Date, default: Date.now },

    isLogin: { type: Boolean, default: false },

    isAdmin: { type: Boolean, default: false },

    ProfilePic: { type: String },

  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
