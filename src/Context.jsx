import React, { createContext, useEffect, useState } from 'react'

const Context = createContext()

function ContextProvider(props) {
   const [photos, setPhotos] = useState([])

   useEffect(() => {
      fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
         .then(res => res.json())
         .then(data => setPhotos(data))
         .catch(err => alert(`RELOAD PAGE, ${err}`))
   }, [])

   // console.log(photos)


   return(
      <Context.Provider value={{
         photos
      }}>
         {props.children}
      </Context.Provider>
   )
}

export { Context, ContextProvider }