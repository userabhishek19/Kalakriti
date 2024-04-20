import React, { useState, useEffect } from 'react';
import { FaClock } from 'react-icons/fa'; 

const BiddingPage = () => {
  const endTime = new Date('2024-04-25T12:00:00Z');

  const calculateTimeLeft = () => {
    const difference = endTime - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  // Array of bidder details
  const bidders = [
    { name: 'John Doe', maxBid: 5000, minBid: 1000 },
    { name: 'Jane Smith', maxBid: 4500, minBid: 1200 },
    { name: 'Alice Johnson', maxBid: 4800, minBid: 1100 },
    { name: 'Bob Williams', maxBid: 5200, minBid: 1050 },
    { name: 'Emily Brown', maxBid: 4900, minBid: 1150 },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {/* Map through bidders array */}
      {bidders.map((bidder, index) => (
        <div key={index} className="max-w-md mx-auto bg-opacity-50 rounded-lg overflow-hidden shadow-md">
          <div className="h-64 overflow-hidden relative">
            <img
              src="https://via.placeholder.com/500x600"
              alt="Bidding item"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 m-4 flex items-center">
              <FaClock className="text-white mr-2" />
              <span className="text-white">
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
              </span>
            </div>
          </div>
          <div className="p-4 flex flex-col items-center">
            {/* Max and Min Bid */}
            <div className="text-white text-sm mb-2">
              Max Bid: ${bidder.maxBid} | Min Bid: ${bidder.minBid}
            </div>
            {/* Bidder name */}
            <div className="text-white text-lg mb-2">Bidder: {bidder.name}</div>
            {/* Bid Now option */}
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-full">
              Bid Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BiddingPage;
