import React from 'react';

import { Link } from 'react-router-dom';

// // //import data
import { services } from '../data';

const Services = () => {
  const { title, details } = services;
  return (
    <div className="container mx-auto py-12">
      <h1 className="h3 pb-8">What Makes Us Different</h1>
      {details?.slice(0, 2).map((detail, index) => {
        // destruxt details
        const { subtitle, subdetails, img } = detail;
        return (
          <div
            key={index}
            className="md:flex px-1 py-4 my-2 gap-4 border-t-[2px]"
          >
            <div className="p-6 w-2/3">
              <h1 className="h5">{subtitle}</h1>
              <p className="text-body-sm md:text-body-md lg:text-body-lg py-4">
                {subdetails}
              </p>
            </div>

            <div className="p-6 w-1/3">
              <img className='w-full h-full' src={img} alt="" />
            </div>
          </div>
        );
      })}
      <div className=" border-t-[2px] p-4">
        <Link to="/about">
          <button className="btn btn-sm md:btn-lg uppercase border-2 border-black/80 hover:bg-primary-200 hover:text-white hover:border-0 transition">
            Learn More About Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
