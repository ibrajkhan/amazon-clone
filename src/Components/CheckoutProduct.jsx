import React from "react";
import "../CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, image, ratings }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeBasketProducts = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
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
          {Array(ratings).fill(<p>&#11088;</p>)}
        </div>
        <button onClick={removeBasketProducts}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
