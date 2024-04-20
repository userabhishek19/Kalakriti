import React from 'react';

const HeroPage = () => {
    return (
        <div className="flex">
            <div className="flex-1 flex justify-center items-center">
                <div className="p-8">
                    <img src="assets/2.jpg" alt="Small Image" className="mx-auto w-1/2" />
                    <div className="text-center mt-4">
                        <h1 className="text-3xl font-bold">Kalakriti</h1>
                        <p className="text-lg text-gray-600">Fusion of culture, commerce, and bidding</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 h-screen bg-cover bg-center" style={{backgroundImage: `url('/assets/1.jpg')`}}>
                {/* You can optionally add content inside the right section */}
            </div>
        </div>
    );
};

export default HeroPage;
