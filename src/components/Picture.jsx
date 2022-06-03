import React, { useState } from "react";

function Picture({ img, className }) {
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
            hovered && <i className="ri-add-box-line cart"></i>
         }

      </div>
   );
}

export default Picture;
