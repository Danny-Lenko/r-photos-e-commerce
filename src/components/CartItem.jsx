import React, {useState, useContext} from "react"
import {Context} from "../Context"

function CartItem({item}) {
   const [hovered, setHovered] = useState(false)
   const {removeFromCart} = useContext(Context)

   function handleHover(state) {
      setHovered(state)
   }
   
   return (

      <div 
         className="cart-item"
      >
         <i 
            className={`ri-delete-bin-${hovered ? "fill" : "line"}`}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            onClick={() => removeFromCart(item.id)}
         ></i>

         <img src={item.url} width="130px" alt=""/>
         <p>$2.99</p>
      </div>

   )
}

export default CartItem