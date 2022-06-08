import React from "react"

function PhotoItem({img}) {

   return(
      <img src={img.url} alt="" className="image-grid"/>
   )
}

export default PhotoItem