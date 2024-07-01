import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
import About from './About/About';
import bgImage from '../assets/background.jpg';

const Landing = () => {
  return (
    <div className='min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Content inside the landing page */}
    </div>
  );
}

export default Landing;
