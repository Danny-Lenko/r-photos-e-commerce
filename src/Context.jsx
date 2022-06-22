import React, { createContext, useEffect, useState } from 'react'

const Context = createContext()

function ContextProvider(props) {
   const [photos, setPhotos] = useState([])
   const [cartItems, setCartItems] = useState([])
   const [orderStatus, setOrderStatus] = useState(false)

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

   function placeOrder() {
      setOrderStatus(true)
      setTimeout(() => {
         setOrderStatus(false)
         setCartItems([])
         console.log('Order Placed!')
      }, 3000)
   }

   return(
      <Context.Provider value={{
         photos,
         manageLikeBtn,
         cartItems,
         addToCart,
         removeFromCart,
         orderStatus,
         placeOrder
      }}>
         {props.children}
      </Context.Provider>
   )
}

export { Context, ContextProvider }