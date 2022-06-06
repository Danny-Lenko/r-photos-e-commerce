import React, { useState, useEffect } from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const [pictures, setPictures] = useState([]);
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) => setPictures(data));
  }, []);

  function addToCart(id) {
    const chosenPicture = pictures.find(img => img.id === id)
    setCartItems(prevState => [...prevState, chosenPicture])
  }

  function removeFromCart(id) {
    setCartItems(prevState => prevState.filter(img => img.id !== id))
  }

  function likePicture(id) {
    setPictures(prevState => prevState.map(img => (
      img.id === id 
        ? {...img, isFavorite: !img.isFavorite}
        : img
    )))
  }

  function placeOrder() {
    setTimeout(() => {
      setCartItems([])
      console.log('Order placed')
    }, 3000)
  }

  return (
    <Context.Provider 
      value={{ 
        pictures,
        likePicture,
        cartItems,
        addToCart,
        removeFromCart,
        placeOrder
      }}>
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
