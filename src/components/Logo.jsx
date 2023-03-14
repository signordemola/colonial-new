import React from 'react';

import photo1 from '../assets/images/gallery/photo-007.svg';
import photo2 from '../assets/images/gallery/photo-008.svg';
import photo3 from '../assets/images/gallery/photo-009.svg';
import photo4 from '../assets/images/gallery/photo-010.svg';

const Logo = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto flex justify-between items-center px-6 py-12">
        <img src={photo1} alt="" />
        <img src={photo2} alt="" />
        <img src={photo3} alt="" />
        <img src={photo4} alt="" />
      </div>
    </section>
  );
};

export default Logo;
