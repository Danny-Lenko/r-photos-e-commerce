import React, {useContext} from "react"
import useHover from "../hooks/useHover"
import {Context} from "../Context"

function CartItem({item}) {
   const [hovered, ref] = useHover()
   const {removeFromCart} = useContext(Context)

   return(
      <div className="cart-item">
         <i 
            className={`ri-delete-bin-${hovered ? 'fill' : 'line'}`}
            onClick={() => removeFromCart(item.id)}
            ref={ref}
         ></i>

         <img src={item.url} alt="" width="130px"/>
         <p>$2.99</p>
      </div>
   )
}

export default CartItem