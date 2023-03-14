import React from 'react';

import logo from '../assets/images/logo/logo.png';

const Footer = () => {
  return (
    <footer className="text-body-sm md:text-body-md lg:text-body-lg bg-[#dfdbd2]">
      <div className="max-w-[1440px] px-4 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-40 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-9 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="text-body-md text-gray-900 tracking-widest mb-3 uppercase">
              Head office
            </h2>
            <p className="text-body-sm">4190 54th Ave N</p>
            <p className="text-body-sm">Saint Petersburg, FL 33714</p>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="text-body-md text-gray-900 tracking-widest mb-3 uppercase">
              Contact us
            </h2>
            <p className="text-body-sm">(612) 404-1222</p>
            <p className="text-body-sm">contact@colonialfurnitureinc.com</p>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="text-body-md text-gray-900 tracking-widest mb-3 uppercase">
              Working Hours
            </h2>
            <p className="text-body-sm">Mon - Fri: 5 am - 7 pm</p>
            <p className="text-body-sm">Sat - Sun: 6 am - 4 pm</p>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto text-sm py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500  text-center sm:text-left">
            © {new Date().getFullYear()}
          </p>
          <div>All Rights Reserved. Privacy Policy Terms & Conditions</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
