import React, { useState, useContext } from "react";
import {Context} from "../Context"

function Picture({ img, className }) {
   const { likePicture, addToCart, cartItems, removeFromCart } = useContext(Context)
   const [hovered, setHovered] = useState(false)

   function enter() {
     setHovered(true)
   }

   function leave() {
     setHovered(false)
   }

   function renderFavoriteItems() {
      if (hovered && !img.isFavorite) {
         return <i 
            className={`ri-heart-3-line favorite`}
            onClick={() => likePicture(img.id)}
         ></i>

      } else if (img.isFavorite) {
         return <i 
            className={`ri-heart-3-fill favorite`}
            onClick={() => likePicture(img.id)}
         ></i>
      }
   }

   function renderCartItems() {
      if (hovered && !cartItems.find(pic => pic.id === img.id)) {
         return <i 
            className="ri-add-box-line cart"
            onClick={() => addToCart(img.id)}
         ></i>
         
      } else if (cartItems.find(pic => pic.id === img.id)) {
         return <i 
            className="ri-shopping-cart-line cart"
            onClick={() => removeFromCart(img.id)}
         ></i>
         
      }
   }

   return (
      <div 
         className={`image-container ${className}`}
         onMouseEnter={enter}
         onMouseLeave={leave}
      >
         <img className="image-grid" src={img.url} alt="" />
      
         { renderFavoriteItems() }
         { renderCartItems() }
      </div>
   );
}

export default Picture;
