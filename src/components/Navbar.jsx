import React from 'react';
import { navItems } from "../constants";
import { IoMdSearch } from "react-icons/io";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80" style={{ height:'10vh',position:'fixed',width:'100vw',fontFamily:'Gill Sans',fontWeight:'bold'}}>
      <div className='container px-4 mx-auto relative text-sm'>
        <div className='flex '>
          <div className='flex items-center flex-shrink-0'>
           
             <img className='h-10 w-10 mr-2' src="https://images.unsplash.com/photo-1695740639466-7baecca4224d?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{borderRadius:'50%', marginLeft:'-80px'}}/> 
            
            <span className='text-xl tracking-tight' style={{marginTop:'10px'}}>Kalariti</span>
            <ul className='hidden lg:flex ml-14 space-x-12' style={{marginTop:'10px'}}>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <div>
                
              </div>
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center" style={{marginLeft:'260px',marginTop:'10px'}}>
            <a href="#" className="py-2 px-3" style={{fontSize:'25px'}}>
            <IoMdSearch />
              </a>
              <a href="#" className="py-2 px-3 border rounded-md">
               Chat With Us
              </a>
              <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
              </a>
              </div>
              <div style={{marginLeft:'40px',marginTop:'10px'}}>
              <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
                Create an account
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
