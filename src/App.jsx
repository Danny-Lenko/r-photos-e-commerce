import React from 'react'
import './styles.css'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Photos from './pages/Photos'
import Cart from './pages/Cart'

function App() {

   return(
      <>
         <Header />

         <Routes>
            <Route path="/" element={<Photos />} />

            <Route path="/cart" element={<Cart />} />
         </Routes>
      </>
   )
}

export default App