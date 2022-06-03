import React, { useState, useEffect } from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) => setPictures(data));
  }, []);

  return (
    <Context.Provider value={{ pictures }}>{props.children}</Context.Provider>
  );
}

export { Context, ContextProvider };
