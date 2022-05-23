import { Link } from "react-router-dom";
import React from 'react'

export default function Navbar() {
  return (
    <div>
    <Link to="/">Home|| </Link>
    <Link to="/cart">Cart|| </Link>
    <Link to="/shoes">Shoes|| </Link>
    <Link to="/shirts">Shirts|| </Link>


    </div>
  )
}
