import React, { useContext } from 'react'

import { Context } from '../Context'

function Photos() {
   const { photos } = useContext(Context)

   console.log(photos)

   return(
      <main className="photos">
         <h2>Photos go here</h2>
      </main>
   )
}

export default Photos

