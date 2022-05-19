const dotenv = require("dotenv");
dotenv.config();
///!---------------------------->

///!----------Requires------------------>

const express = require("express");
const cors = require('cors');
const path = require("path");


require('./DB/');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/comment',require('./Routes/comments-route'));
app.use('/product',require('./Routes/products-route'));


const port = process.env.PORT || 8000;
///!----------Requires------------------>



app.get('/',(req,res)=>{
    res.send("Welcome to the HACKAHTON!!");
})
app.listen(port, () => {
  console.log(`SERVER IN UP On port ${port}`);
});
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build", "index.html"));
//   });
// }
