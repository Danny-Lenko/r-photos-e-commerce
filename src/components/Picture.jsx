import React, { useState, useContext } from "react";
import {Context} from "../Context"

function Picture({ img, className }) {
   const { likePicture } = useContext(Context)
   const [hovered, setHovered] = useState(false)

   function enter() {
     setHovered(true)
   }

   function leave() {
     setHovered(false)
   }

   return (
      <div 
         className={`image-container ${className}`}
         onMouseEnter={enter}
         onMouseLeave={leave}
      >
         
         <img className="image-grid" src={img.url} alt="" />
         {
            hovered && 
               <>
                  <i 
                     className={`ri-heart-3-${img.isFavorite ? 'fill' : 'line'} favorite`}
                     onClick={() => likePicture(img.id)}
                  ></i>
                  <i className="ri-add-box-line cart"></i>
               </>
         }

      </div>
   );
}

export default Picture;
