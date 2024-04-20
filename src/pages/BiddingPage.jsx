import React, { useState } from 'react';

const BiddingPage = () => {
  const [maxBid, setMaxBid] = useState(100); // Example initial max bid
  const [price, setPrice] = useState(200); // Example initial price
  const [sellerInfo, setSellerInfo] = useState({
    name: 'Seller Name',
    email: 'seller@example.com',
  });

  // Example function to handle bidding
  const handleBid = () => {
    // Your bidding logic here
    // For example, increase max bid and update price
    const newMaxBid = maxBid + 10;
    const newPrice = price + 10;
    setMaxBid(newMaxBid);
    setPrice(newPrice);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center relative">
      {/* Background image overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-50 z-0"></div>

      <div className="bg-red-700 p-8 rounded-lg text-white relative z-10">
        <h1 className="text-3xl font-bold mb-4">Bidding Page</h1>
        <div className="mb-4">
          <p className="text-lg font-bold">Time Remaining: 2 days 5 hours</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-bold">Max Bid: ${maxBid}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-bold">Price: ${price}</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-bold">Seller Information:</p>
          <p>Name: {sellerInfo.name}</p>
          <p>Email: {sellerInfo.email}</p>
        </div>
        <button
          className="bg-white text-red-700 font-bold py-2 px-4 rounded transition duration-300 hover:bg-red-700 hover:text-white"
          onClick={handleBid}
        >
          Bid Now
        </button>
      </div>
    </div>
  );
};

export default BiddingPage;
