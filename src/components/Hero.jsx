import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen w-screen bg-hero bg-cover bg-center bg-opacity-50 flex px-5 py-24 items-center justify-center">
      <div className="flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-5/6 w-full py-4">
          <h1 className="h1 mb-4 font-medium text-black/70">
            Colonial Furniture & Mattresses Inc.
          </h1>
          
          {/* <div className="flex justify-center">
            <button className="inline-flex uppercase text-white bg-primary-200 border-0 py-2 px-6 focus:outline-none hover:bg-primary-100 rounded text-lg">
              Sectors
            </button>
            <button className="ml-4 inline-flex uppercase text-primary-500  bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Contact
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
