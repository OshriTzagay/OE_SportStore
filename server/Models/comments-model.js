const mongoose = require("mongoose");

const Comment = new mongoose.Schema(
  {
    UserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    ProductId: { type: String },

    Description: { type: Object },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", Comment);
