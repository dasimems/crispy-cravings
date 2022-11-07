import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

const CartItem = ({ itemData, quantity }) => {
  return (
    <div className="--item">
      <div className="art">
        <img src="#" alt="" />
      </div>
      <div className="description">
        <p className="title">{itemData.title}</p>
        <div className="notables">
          <span className="--item">
            <p className="title">Note</p>
            <b className="value">Less Ice</b>
          </span>
        </div>
        <span className="price">${itemData.price}</span>
        <div className="quantity">
          <button className="--add">
            <AiOutlinePlus/>
          </button>
          <b className="value">{quantity}</b>
          <button className="--reduce">
            <AiOutlineMinus/>
          </button>
        </div>
      </div>
    </div>
  )
}


export default CartItem