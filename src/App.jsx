import React from "react"
import {Routes, Route} from "react-router-dom"

import "./styles.css"
import Photos from "./pages/Photos"
import Cart from "./pages/Cart"

import Header from "./components/Header"

function App() {

  return(
    <div>
      <Header />
      
      <Routes>

        <Route path="/" element={<Photos />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </div>
  )
}

export default App