const mongoose = require("mongoose");

const Product = new mongoose.Schema(
  {
    Type: { type: String, required: true },

    SubType: { type: String, required: true },

    Brand: { type: String, required: true },

    Size: { type: String, required: true },
    
    Name:{type:String},

    Pics: { type: Array },

    Likes: { type: Array },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", Product);
