import React from 'react';

const HeroPage = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Artisan Avenue
        <span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for Local Arts
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Let's ignite the flame of creativity and embrace the beauty of local arts and crafts! Together, we can build a vibrant community where every brushstroke, stitch, and carve tells a story of passion, tradition, and innovation.
       Join us in celebrating the richness of our cultural heritage and empowering artisans to shine bright in their craft. Together, let's unleash the power of creativity and transform dreams into masterpieces that captivate hearts and inspire generations to come!!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-red-500 to-red-800 py-3 px-4 mx-3 rounded-md"
        >
         Join Prime
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Scroll Creativity
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <img
          src="../assets/1.jpg"
          alt="Image 1"
          className="rounded-lg w-1/2 border border-red-700 shadow-sm shadow-red-400 mx-2 my-4"
        />
        <img
          src="../assets/2.jpg"
          alt="Image 2"
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        />
      </div>
    </div>
  );
};

export default HeroPage;
