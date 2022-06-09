import React, {useEffect, useState} from "react"

const Context = React.createContext()

function ContextProvider(props) {
   const [photos, setPhotos] = useState([])

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

   return(
      <Context.Provider value={{
         photos,
         likePhoto
      }}>
         {props.children}
      </Context.Provider>
   )
}

export {Context, ContextProvider}