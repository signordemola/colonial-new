import React from 'react';

// import components
import Display from '../components/Display';
import Featured from '../components/Featured';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
// import Services from '../components/Services';

const Home = () => {
  return (
    <div>
      <Hero />
      <Gallery />
      <Display />
      <Featured />
      {/* <Services /> */}
    </div>
  );
};

export default Home;
