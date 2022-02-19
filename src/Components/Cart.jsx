import React from "react";
let Data = require("../Store");
let Card = Data.Data;

export default function Cart() {
  for (let i = 0; i < Card.length; i++) {
    return (
      <>
      {console.log(Card[i])}
      <div>Cart</div>
      </>
    );
  }
}
