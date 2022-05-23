import { Link } from "react-router-dom";
import React from "react";
import "./Nav-Bar.css";
export default function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="pre-nav">
        <div className="section-B">
          <img src="imgs/jordanLogo.png" alt="logo" className="logo" />
        </div>

        <div className="section-A">
          <p>Help |</p>
          <p>Join Us |</p>
          <p>Sign In |</p>
        </div>
      </div>





<div className="nav-routes">

  <div className="left-section"></div>


        <ul className="theUl">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="shoes">Shoes</Link>
        </li>
        <li>
          <Link to="/shirts">Shirts</Link>
        </li>

        <li>
          <Link to="/accesso">Accessories</Link>
        </li>
   
      </ul>


  <div className="right-section">
    <ul>
      <li><input type="text" /></li>
      <li><img src="https://pic.onlinewebfonts.com/svg/img_335286.png" alt="" className="accIcon"/></li>
      <li></li>

    </ul>
  </div>

</div>


    </nav>
  );
}
