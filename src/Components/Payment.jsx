import React from "react";
import "../Payment.css";
import { useStateValue } from "./StateProvider";

function Paymemt() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <div className="payment__section">
          <div className="payment__title">
            <h3>Dilevery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
          </div>
        </div>
        <div className="payment__section"></div>
        <div className="payment__section"></div>
      </div>
    </div>
  );
}

export default Paymemt;
