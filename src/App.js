import React from 'react';

// react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// components & pages
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
// import Service from './pages/Service';
// import Sectors from './pages/Sectors';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  // {
  //   path: '/service',
  //   element: <Service />,
  // },
  // {
  //   path: '/sectors',
  //   element: <Sectors />,
  // },
]);

function App() {
  return (
    <div className="">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
