import React from 'react';

// import icons
import { FcShipped } from 'react-icons/fc';
import { FaBoxOpen, FaTree } from 'react-icons/fa';

const Display = () => {
  return (
    <div className="py-8 text-body-sm container mx-auto px-6 md:px-0">
      <h1 className="text-center h4 capitalize text-primary-200 mb-4">
        We’re solving the biggest problems in furniture
      </h1>
      <div className="md:flex justify-between items-center gap-2">
        <div className="flex justify-between items-center gap-6 p-1">
          <div className='w-1/4'>
            <FcShipped size={100} className="w-full h-full " />
          </div>
          <div className="span-2">
            <h6 className="font-medium">Fast & free shipping</h6>
            <p className=" font-extralight">
              Every single order ships for free. No minimums, no tiers, no fine
              print whatsoever.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center gap-6 p-1">
          <div className="w-1/4">
            <FaBoxOpen size={100} className="w-full h-full text-[#388e3c]" />
          </div>
          <div>
            <h6 className="font-medium">Modular, easy-to-move design</h6>
            <p className=" font-extralight">
              Our innovative modular design is driven by the belief that
              furniture should fit this home, and the next one.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center gap-6 p-1">
          <div className="w-1/4">
            <FaTree size={100} className="w-full h-full text-[#388e3c]" />
          </div>
          <div>
            <h6 className="font-medium">Durable, premium materials</h6>
            <p className=" font-extralight">
              We use materials like sustainably-forested wood, strengthened
              steel hardware, and top-grain Italian leather.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
