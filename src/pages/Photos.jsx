import React, {useContext} from "react"
import {Context} from "../Context"
import {getClass} from "../utils/index"

import PhotoItem from "../components/PhotoItem"

function Photos() {
   const {photos} = useContext(Context)

   const allPhotos = photos.map((img,i) => (
      <div 
         key={img.id} 
         className={`image-container ${getClass(i)}`}
      >
         <PhotoItem img={img} />
      </div>
   ))

   return(
      <main className="photos">

         {allPhotos}
      </main>
   )
}

export default Photos