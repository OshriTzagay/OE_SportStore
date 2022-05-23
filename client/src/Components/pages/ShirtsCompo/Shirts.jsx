import React, { useState } from "react";
import { UpdateProduct } from "../../../Services/Product-service";
export default function Shirts() {
  const obj = {
    Name: "Oshrieeeeeellllll",
  };


  const CheckUpdate = () => {
    UpdateProduct("6286339212125ff61ecb2569",obj)
  };

  return (
    <div>
      <h1>Shirts</h1>
      {/* <input type="text" name="name" onChange={CheckUpdate} /> */}

      <button onClick={CheckUpdate}>AAA</button>
    </div>
  );
}
