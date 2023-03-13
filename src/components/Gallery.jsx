import React from 'react';

// import images
import tables from '../assets/images/gallery/tables.webp';
import bedroom from '../assets/images/gallery/bedroom.webp';
import dinning from '../assets/images/gallery/dining.webp';
import shelves from '../assets/images/gallery/shelves.webp';
import rug from '../assets/images/gallery/rugs.webp';
import seating from '../assets/images/gallery/seating.webp';

const Gallery = () => {
  return (
    <section className="text-body-sm md:text-body-md lg:text-body-lg bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <p className="sm:text-3xl text-2xl uppercase mb-4 text-primary-200">
            We provide homes and businesses with a range of turnkey renewable
            energy solutions that deliver financial savings, carbon reduction,
            and energy independence.
          </p>
          {/* <h1 className="">Clever designs, delivered free</h1> */}
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-2/4 md:w-1/2 p-4">
            <div className="flex relative h-[400px]">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={seating}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-primary-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest uppercase text-sm title-font font-medium text-primary-500 mb-1">
                  seating
                </h2>
                <h1 className="title-font text-lg font-medium text-primary-900 mb-3">
                  Range 3-Piece One Arm Sofa
                </h1>
                <p className="leading-relaxed text-body-md">
                  A one-armed sofa configuration of our Range Collection with
                  three seats and room to grow — that open end is the perfect
                  spot for an attachable table upgrade.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/4 md:w-1/2 p-4">
            <div className="flex relative h-[400px]">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={dinning}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-primary-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest uppercase text-sm title-font font-medium text-primary-500 mb-1">
                  Dining
                </h2>
                <h1 className="title-font text-lg font-medium text-primary-900 mb-3">
                  Relay Outdoor Dining Set
                </h1>
                <p className="leading-relaxed text-body-md">
                  The Relay Collection is a smart, sophisticated array of
                  outdoor furniture, spanning modular sofas and sectionals as
                  well as fashionable, functional dining designs.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/4 md:w-1/2 p-4">
            <div className="flex relative h-[400px]">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={bedroom}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-primary-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest uppercase text-sm title-font font-medium text-primary-500 mb-1">
                  Bedroom
                </h2>
                <h1 className="title-font text-lg font-medium text-primary-900 mb-3">
                  Chorus Bed, Queen with Wood Headboard
                </h1>
                <p className="leading-relaxed text-body-md">
                  Our Chorus Bed does the one thing every single bed should do
                  well: provide a quiet, stable platform for sleep, because a
                  creaky, wobbly, or otherwise distracting bed should be the
                  last thing keeping you up at night.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/4 md:w-1/2 p-4">
            <div className="flex relative h-[400px]">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={tables}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-primary-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest uppercase text-sm title-font font-medium text-primary-500 mb-1">
                  Tables
                </h2>
                <h1 className="title-font text-lg font-medium text-primary-900 mb-3">
                  Serif Coffee Table
                </h1>
                <p className="leading-relaxed text-body-md">
                  The Serif Coffee Table is a timeless, universal design drawn
                  from mid-century Danish Modernism. The soft radius of the
                  edges creates a graceful silhouette that’s only achievable
                  when working with solid wood.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/4 md:w-1/2 p-4">
            <div className="flex relative h-[400px]">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={shelves}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-primary-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest uppercase text-sm title-font font-medium text-primary-500 mb-1">
                  shelves
                </h2>
                <h1 className="title-font text-lg font-medium text-primary-900 mb-3">
                  Index Wall Shelf, Set of 2
                </h1>
                <p className="leading-relaxed text-body-md">
                  There’s so much more to these shelves than meets the eye. What
                  begins as a set of three simple shelves can turn into a
                  dramatic, full-wall bookcase that puts the finest libraries to
                  shame. The magic is made possible by two mounting positions on
                  the back of each shelf
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/4 md:w-1/2 p-4">
            <div className="flex relative h-[400px]">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={rug}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-primary-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-primary-500 mb-1">
                  THE SUBTITLE
                </h2>
                <h1 className="title-font text-lg font-medium text-primary-900 mb-3">
                  Prairie Modern Rug
                </h1>
                <p className="leading-relaxed text-body-md">
                  This 100% recycled polyester rug with an alternating cut and
                  loop pile construction references the unique stained glass
                  designs of American mid-century Modernism and the
                  underappreciated Bauhaus weaving workshop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
