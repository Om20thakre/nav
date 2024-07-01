import React from 'react';
import bgImage from '../../assets/Services/BackgroundImage.png';
import ServicesCard from './ServicesCard';

const Services = () => {
  return (
    <div>
      <div className='text-black text-center pt-30 '>
        {/* Adjust padding top (pt) values for responsiveness */}
        <h1 className='text-4xl sm:text-5xl md:text-4xl font-normal font-Oswald uppercase mb-4 sm:mb-6 text-sky-950'>
          Our Services
        </h1>
        <p className='font-AlbertSans text-sm sm:text-base text-lg'>
          Creating value for our community of buyers, suppliers, and channel partners.
        </p>
      </div>
      <div className='absolute'>
        <ServicesCard/>
      </div>
      <div className='min-h-screen bg-cover bg-center my-[300px]' style={{ backgroundImage: `url(${bgImage})` }}>
        {/* Content inside the landing page */}
      </div>
    </div>
  );
}

export default Services;
