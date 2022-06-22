import React, { useContext } from 'react'

import { Context } from '../Context'
import PhotoItem from '../components/PhotoItem'

function Photos() {
   const { 
      photos 
   } = useContext(Context)

   console.log(photos)

   const allPhotos = photos.map((item, i) => (
      <PhotoItem key={item.id} item={item} i={i} />
   ))

   return(
      <main className="photos">
         {allPhotos}
      </main>
   )
}

export default Photos

