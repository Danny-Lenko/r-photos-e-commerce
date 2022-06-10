import React, {useContext} from "react"
import useHover from "../hooks/useHover"
import {getClass} from "../utils/index"
import {Context} from "../Context"

function PhotoItem({img, index}) {
   const [hovered, ref] = useHover()
   const {likePhoto, cartItems, addToCart, removeFromCart} = useContext(Context)

   function chooseFavoriteIcon() {
      if (img.isFavorite) {
         return 'fill'
      } else if (hovered) {
         return 'line'
      }
   }

   function chooseCartIcon() {
      if (cartItems.some(item => item.id === img.id)) {
         return <i 
            className="ri-shopping-cart-line cart"
            onClick={() => removeFromCart(img.id)}
         ></i>
      } else if (hovered) {
         return <i 
            className="ri-add-box-line cart"
            onClick={() => addToCart(img.id)}
         ></i>
      }
   }

   return(
      <div 
         ref={ref}
         className={`image-container ${getClass(index)}`}
      >
         <img src={img.url} alt="" className="image-grid" />

         <i 
            className={`ri-heart-${chooseFavoriteIcon()} favorite`}
            onClick={() => likePhoto(img.id)}
         ></i>

         {chooseCartIcon()}

      </div>
   )
}

export default PhotoItem