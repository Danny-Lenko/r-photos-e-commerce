import React, {useContext} from "react"
import useHover from "../hooks/useHover"
import {getClass} from "../utils/index"
import {Context} from "../Context"

function PhotoItem({img, index}) {
   const [hovered, ref] = useHover()
   const {likePhoto} = useContext(Context)

   function renderFavoriteIcon() {
      if (img.isFavorite) {
         return 'fill'
      } else if (hovered) {
         return 'line'
      }
   }

   return(
      <div 
         ref={ref}
         className={`image-container ${getClass(index)}`}
      >
         <img src={img.url} alt="" className="image-grid" />

         <i 
            className={`ri-heart-${renderFavoriteIcon()} favorite`}
            onClick={() => likePhoto(img.id)}
         ></i>

      </div>
   )
}

export default PhotoItem