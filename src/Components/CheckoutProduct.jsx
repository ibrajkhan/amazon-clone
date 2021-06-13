import React from "react";
import "../CheckoutProduct.css";

function CheckoutProduct({ id, title, price, image, ratings }) {
  return (
    <div className="checkoutProducts">
      <img src={image} alt="Pro_img" className="checkoutProducts__image" />
      <div className="checkoutProducts_info">
        <p className="checkProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(ratings).fill(<p>&#110088;</p>)}
        </div>
      </div>
      <button>Remove From Basket</button>
    </div>
  );
}

export default CheckoutProduct;
