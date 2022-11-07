import React, { useState } from "react";
// import CartItem from "./ItemDisplay/CartItem";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

const ItemDisplay = ({ CurrentItem }) => {
  let [cartIsOpen, setCartIsOpen] = useState(false);

  let {price, title, image} = CurrentItem

  let deliveryPrice = (10/100) * price
  let totalPrice = Number(deliveryPrice)+Number(price)

  return (
    <>
      <div className={"item-display " + (cartIsOpen ? "open" : "")}>
        <div className="close-cart" onClick={() => setCartIsOpen(false)}>
          <FaTimes />
        </div>
        <div className="--header">
          <div className="--orders">
            <span className="title">Current Order</span>
            <b className="value">{title || "{null}"}</b>
          </div>

          <div className="--table">
            <span className="title">Price</span>
            <b className="value">${price || "{null}"}</b>
          </div>
        </div>

        {/* <div className="--cart" custom-scroll={true}>
          <CartItem
            itemData={{
              title: "Orange Juice",
              price: "30.3",
            }}
            quantity="5"
          />
          <CartItem
            itemData={{
              title: "Lemon Juice",
              price: "45.2",
            }}
            quantity="7"
          />
          <CartItem
            itemData={{
              title: "StrawBerry Juice",
              price: "73",
            }}
            quantity="10"
          />
        </div> */}

        <img src={image} alt="" width="100%"/>

        <div className="--summary">
          {/* <div className="--item">
            <span className="title">items(7)</span>
            <b className="value">$28,67</b>
          </div> */}
          <div className="--item">
            <span className="title">Delivery (10%)</span>
            <b className="value">${deliveryPrice || "{null}"}</b>
          </div>
          <div className="--item total">
            <span className="title">Total</span>
            <b className="value">${totalPrice}</b>
          </div>
        </div>

        <div className="--checkout">
          <button>Order Now</button>
        </div>
      </div>

      <div
        className={"cart-mobile-toggler " + (cartIsOpen ? "" : "active")}
        onClick={() => setCartIsOpen(true)}
      >
        <AiOutlineShoppingCart />
      </div>
      <div className={"cart-overlay " + (cartIsOpen ? "active" : "")}></div>
    </>
  );
};

export default ItemDisplay;
