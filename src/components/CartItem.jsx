import React from "react"

function CartItem({item}) {
   
   
   return (

      <div className="cart-item">
         <img src={item.url} width="130px" alt=""/>
         <p>$2.99</p>
      </div>

   )
}

export default CartItem