// import React from 'react';

// import { Link } from 'react-router-dom';

// // // //import data
// import { services } from '../data';

// const Services = () => {
//   const { title, details } = services;
//   console.log(title);
//   return (
//     <div className="container mx-auto">
//       <h1 className="h3 pb-8">Our Services</h1>
//       {details?.slice(0, 3).map((detail, index) => {
//         // destruxt details
//         const { subtitle, subdetails, img } = detail;
//         return (
//           <div
//             key={index}
//             className="md:flex px-1 py-4 my-2 gap-4 border-t-[2px]"
//           >
//             <div className="span-1 p-6">
//               <h1 className="h5">{subtitle}</h1>
//               <p className="text-body-sm md:text-body-md lg:text-body-lg py-4">
//                 {subdetails}
//               </p>
//             </div>

//             <div className="span-1 p-6">
//               <img src={img} alt="" />
//             </div>
//           </div>
//         );
//       })}
//       <div className=" border-t-[2px] p-4">
//         <Link to="/service">
//           <button className="btn btn-sm md:btn-lg uppercase text-white bg-primary-200 hover:bg-primary-100 transition">
//             See all services
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Services;
