import React from 'react';

const About = () => {
  return (
    <div className="pt-24 text-neutral-500/80 container mx-auto text-body-sm md:text-body-md lg:text-body-lg px-6 md:px-10">
      <h1 className="h1 text-center">About Us</h1>
      <div className="border-t-[2px] mt-6 p-4">
        <p className="text-body-sm md:text-body-md">
          <span className="text-primary-200 font-semibold">
            Colonial Furniture and Mattresses Inc.
          </span>{' '}
          was established in 2011 and pioneered selling furniture online and
          retail in Florida. Since then we have become one of the largest online
          furniture retailers by offering quality furniture to our customers at
          fair prices in Houston. Our sales have continuously grown from our
          first year in business. It is our goal to continue that growth by
          offering a wider selection of quality furniture at the lowest prices
          available, and by providing you with the quality service you deserve.
        </p>
      </div>

      <div className="border-t-[2px] mt-6 p-6 flex flex-col space-y-2 md:flex-row justify-around items-center text-primary-200">
        <p>Perferct Precision</p>
        <p>Customizable</p>
        <p>Affordable</p>
      </div>
      <div className="border-t-[2px] mt-6 p-4">
        <h1 className="h6 text-primary-300">
          Amanda Serrano <span className="px-2">-</span>{' '}
          <span className="px-2">Founder & CEO</span>
        </h1>
        <p className="p-2">
          Amanda Serrano is a visionary leader with a passion for innovation and
          a commitment to excellence. She has a strong background in business,
          and has been in the industry for over 10 years. She is a highly
          respected leader in the community, and is known for her ability to
          bring together teams to create innovative solutions. She is a
          passionate advocate for diversity and inclusion in the workplace, and
          is committed to creating an environment where everyone can thrive.
          Amanda is a strong believer in the power of collaboration and is
          always looking for ways to bring people together to create something
          great.
        </p>
      </div>

      <div className="border-t-[2px] mt-6 p-4">
        <h1 className="h6 text-primary-300">
          Susan M Merritt <span className="px-2">-</span>{' '}
          <span className="px-2">Co-Founder & CFO</span>
        </h1>
        <p className="p-2">
          Susan M Merritt is an experienced leader and has a deep understanding
          of the business landscape. Robert is an avid traveler and enjoys
          exploring new cultures and ideas. He is also an active member of the
          community, and is always looking for ways to help other entrepreneurs
          succeed.
        </p>
      </div>
    </div>
  );
};

export default About;
