import React from "react";

function Coin({ name, image, current_price, symbol }) {
  return (
    <div className="coin">
      <h1>Name: {name}</h1>
      <img src={image} alt="" />
      <h3>Price:{current_price} </h3>
      <h3>Symbol:{symbol} </h3>
    </div>
  );
}

export default Coin;
