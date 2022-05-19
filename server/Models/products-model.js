const mongoose = require("mongoose");

const Product = new mongoose.Schema(
  {
    Type: { type: String, required: true },

    SubType: { type: String, required: true },

    Brand: { type: String, required: true },

    Size: { type: Array, required: true },
    
    InStock:{type:String,required:true},

    Name:{type:String},
    
    Pics: { type: Array },
    
    Likes: { type: Array },

    Price: {type:Number},

    Description:{type:String},

    Gender:{type:String},

    


  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", Product);
