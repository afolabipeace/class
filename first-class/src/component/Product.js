import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
function Product() {
  return (
    <>
        <button >Product</button>
        <Routes>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </>
  )
}

export default Product