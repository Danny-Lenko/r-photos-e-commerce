import React, {useEffect, useState} from "react"

const Context = React.createContext()

function ContextProvider(props) {
   const [photos, setPhotos] = useState([])
   const [cartItems, setCartItems] = useState([])

   const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
   useEffect(() => {
      fetch(url)
         .then(res => res.json())
         .then(data => setPhotos(data))
   }, [])

   function likePhoto(id) {
      setPhotos(prevState => prevState.map(img => (
         img.id === id
            ? {...img, isFavorite: !img.isFavorite}
            : img
      )))
   }

   function addToCart(id) {
      const chosenImg = photos.find(img => img.id === id)
      setCartItems(prevState => [...prevState, chosenImg])
   }

   function removeFromCart(id) {
      setCartItems(prevState => prevState.filter(img => img.id !== id))
   }

   return(
      <Context.Provider value={{
         photos,
         likePhoto,
         cartItems,
         addToCart,
         removeFromCart
      }}>
         {props.children}
      </Context.Provider>
   )
}

export {Context, ContextProvider}