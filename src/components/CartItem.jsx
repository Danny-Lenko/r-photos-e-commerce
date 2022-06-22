import React, { useContext } from 'react'

import { Context } from '../Context'
import useHover from '../hooks/useHover'

function CartItem({ item }) {
   const [ hovered, ref ] = useHover()
   const { removeFromCart } = useContext(Context)

   return(
      <div className="cart-item">
         <i
            onClick={() => removeFromCart(item.id)}
            ref={ref}
            class={`ri-delete-bin-${hovered ? 'fill' : 'line'}`}
         ></i>

         <img width="130px" src={item.url} alt=""/>
         <p>$2.99</p>
      </div>
   )
}

export default CartItem