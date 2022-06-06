import React, { useContext } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem"

function Cart() {
  const { cartItems, placeOrder } = useContext(Context);
  const allItems = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ))

  const total = cartItems.length * 2.99

  return (
    <main className="cart-page">

      <h1>Check out</h1>

      {allItems}

      {
          cartItems[0] 
            && <div className="order-button">
                <button onClick={placeOrder}>Place order</button>
            </div>
      }

      <p className="total-cost">Total: ${total}</p>
    </main>
  );
}

export default Cart;
