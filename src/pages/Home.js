import React from 'react';

// import components
import Display from '../components/Display';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import Logo from '../components/Logo';
import Services from '../components/Services';
// import Services from '../components/Services';

const Home = () => {
  return (
    <div>
      <Hero />
      <Gallery />
      <Services />
      <Display />
      <Logo />
    </div>
  );
};

export default Home;
