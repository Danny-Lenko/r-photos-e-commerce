import React, { useContext } from 'react'

import { Context } from '../Context'
import CartItem from '../components/CartItem'

function Cart() {
   const { 
      cartItems,
      orderStatus,
      placeOrder
   } = useContext(Context)

   const allCartItems = cartItems.map(item => (
      <CartItem item={item} key={item.id} />
   ))

   return(
      <main className="cart-page">
         <h1>Cart Items</h1>

         {allCartItems}

         <h2 className="total-cost">Total: ${cartItems.length * 2.99}</h2>
         
         {
            cartItems[0] && <div className="order-button">
               <button
                  onClick={placeOrder}
               >
                  {orderStatus ? 'Placing...' : 'Place Order'}
               </button>
            </div>
         }

      </main>
   )
}

export default Cart