import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from './components/Navbar'
import HeroPage from './pages/Hero'
import Footer from './components/Footer'
import ProductDisplay from './pages/ProductDisplay'



const App = () => {
  return (
    <div>
 <Navbar/>

 <ProductDisplay/>
 <Footer />
 


    </div>
  )
}

export default App
