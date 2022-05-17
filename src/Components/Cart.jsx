import React from "react";

const Cart = (props) => {
  const { quantity = [], handleBasketShow = Function.prototype } = props;
  return (
    <div className="cart blue darken-4 white-text" onClick={handleBasketShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="quantity-cart">{quantity}</span> : null}
    </div>
  );
};

export default Cart;
