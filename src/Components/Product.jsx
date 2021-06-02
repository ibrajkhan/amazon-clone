import React from "react";
import "../Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean Startup</p>
        <p className="product__price">
          <small>₹</small>
          <strong>750</strong>
        </p>
        <div className="product__rating">
          <p>&#11088;</p>
        </div>
      </div>
      <img
        src="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg"
        alt=""
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
