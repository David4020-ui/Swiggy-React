import React from 'react'
import LandingPage from './pages/LandingPage'
import './App.css'
import { Routes,Route } from 'react-router-dom'
// import ItemsDisplay from './swiggy/components/ItemsDisplay'
import ProductMenu from './swiggy/components/ProductMenu'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products/:firmId/:firmName" element={<ProductMenu />} />
      </Routes>
    </div>
  )
}

export default App