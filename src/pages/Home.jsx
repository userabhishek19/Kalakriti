import React from 'react';
import Navbar from '../components/Navbar';
// Assuming you have a ProductDisplay component
 // Assuming you have another component
import ProductDisplay from './ProductDisplay';
import HeroPage from './Hero';
import Footer from '../components/Footer';
import BiddingPage from './BiddingPage';

const Home = () => {
  return (
    <div>
       

 <HeroPage/>
 

 <Footer />
 <BiddingPage/>
    </div>
  );
};

export default Home;
