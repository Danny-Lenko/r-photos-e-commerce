import React, { useContext } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem"

function Cart() {
  const { cartItems } = useContext(Context);
  const allItems = cartItems.map(item => (
    <CartItem item={item} />
  ))

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {allItems}
    </main>
  );
}

export default Cart;
