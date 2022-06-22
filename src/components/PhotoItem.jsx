import React, { useContext } from 'react'

import { Context } from '../Context'
import { getClass } from '../utils/index'
import useHover from '../hooks/useHover'

function PhotoItem({ item, i }) {
   const [ hovered, ref ] = useHover()

   const {
      manageLikeBtn,
      cartItems,
      addToCart,
      removeFromCart
   } = useContext(Context)

   function chooseFavoriteIcon() {
      return <i 
         className={`favorite 
            ri-heart-${item.isFavorite ? 'fill' : hovered ? 'line' : ''}
         `}
         onClick={ () => manageLikeBtn(item.id) }
      ></i>
   }

   function chooseCartIcon() {
      const isInCart = cartItems.find(photo => photo.id === item.id)
      return <i 
         className={`cart 
            ri-shopping-cart-${isInCart ? 'fill' : hovered ? 'line' : ''}
         `}
         onClick={ 
            isInCart 
               ? () => removeFromCart(item.id) 
               : () => addToCart(item.id) 
            }
      ></i>
   }

   return(
      <div
         ref={ref}
         className={`image-container ${getClass(i)}`}
      >
         <img src={item.url} alt="" className="image-grid"/>

         {chooseFavoriteIcon()}
         {chooseCartIcon()}
      </div>
   )
}

export default PhotoItem