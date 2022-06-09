import React, {useContext} from "react"
import {Context} from "../Context"

import PhotoItem from "../components/PhotoItem"

function Photos() {
   const {photos} = useContext(Context)

   const allPhotos = photos.map((img, index) => (
      <PhotoItem key={img.id} img={img} index={index} />
   ))

   return(
      <main className="photos">

         {allPhotos}
      </main>
   )
}

export default Photos