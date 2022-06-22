import React, { createContext, useEffect, useState } from 'react'

const Context = createContext()

function ContextProvider(props) {
   const [photos, setPhotos] = useState([])
   const [cartItems, setCartItems] = useState([])

   useEffect(() => {
      fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
         .then(res => res.json())
         .then(data => setPhotos(data))
         .catch(err => alert(`RELOAD PAGE, ${err}`))
   }, [])

   function manageLikeBtn(id) {
      setPhotos(prevState => prevState.map(item => (
         item.id === id
            ? {...item, isFavorite: !item.isFavorite}
            : item
      )))
   }

   function addToCart(id) {
      const currentPhoto = photos.find(photo => photo.id === id)
      setCartItems(prevState => [...prevState, currentPhoto])
   }

   function removeFromCart(id) {
      setCartItems(prevState => prevState.filter(photo => photo.id !== id))
   }

   return(
      <Context.Provider value={{
         photos,
         manageLikeBtn,
         cartItems,
         addToCart,
         removeFromCart
      }}>
         {props.children}
      </Context.Provider>
   )
}

export { Context, ContextProvider }