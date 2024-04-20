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
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import SlidingImages from './pages/SlidingImages';

// import { Home } from 'lucide-react';





const App = () => {

  const Layout=()=>{
    return (
      <div>
        <Navbar/>
        <Outlet/>
      
      </div>
    )
  }
  const router=createBrowserRouter([{
 path:"/",
 element:
 <Layout/>,
 children:[
{
  path:"/",
  element:<Home/>
},
{
  path:"/shop",
  element:<ProductDisplay/>
},
 ]
 },
{
  path:"/login",
  element:<Login/>
} ,
{
  path:"/register",
  element:<Register/>,
},
{
  path:"/stories",
  element:<SlidingImages />
}
])
  return (
    <div>
 {/* <Navbar/>

 <HeroPage/>
 <Footer /> */}
  
   
  
 <RouterProvider router={router}/>
 
    </div>
  )
}

export default App
