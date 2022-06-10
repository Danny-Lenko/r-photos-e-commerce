import React, { useContext } from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
   const {cartItems, placeOrder, orderProcess} = useContext(Context)

   const allCartItems = cartItems.map(item => (
      <CartItem item={item} />
   ))

   const total = cartItems.length * 2.99
   
   return(
      <main className="cart-page">

         <h1>Cart Items</h1>
         
         {allCartItems}

         <p className="total-cost">{`Total: $${total}`}</p>

         {
            cartItems[0] && <div className="order-button">
               <button
                  onClick={placeOrder}
               >
                  {orderProcess ? "Placing..." : "Place Order"}
               </button>
            </div>
         }



      </main>
   )     
}

export default Cart