import React from "react";
import bgImage1 from '../../assets/Services/ServiceCard/Vector1.png';
import bgImage2 from '../../assets/Services/ServiceCard/Vector2.png';
import bgImage3 from '../../assets/Services/ServiceCard/Vector3.png';
import bgImage4 from '../../assets/Services/ServiceCard/Vector4.png';
import bgImage5 from '../../assets/Services/ServiceCard/Vector5.png';

import { FaArrowRight } from 'react-icons/fa'; // Importing FontAwesome arrow icon

const ServicesCard = ({ title, text, image }) => {
  return (
    <div className="max-w-[274px] md:max-w-[300px] h-[380px] md:h-[400px] bg-white shadow-md rounded-lg overflow-hidden m-4 flex flex-col justify-between">
      <div className="p-5 flex flex-col justify-between h-full">
        <div
          className="w-full h-40 mb-4 rounded-full bg-blue-900 flex items-center justify-center overflow-hidden"
          style={{ borderRadius: "50%", backgroundImage: `url(${image})`}}
          alt={`Service: ${title}`}
        >
          {/* Placeholder image */}
          <img src={image} alt={`Service: ${title}`} className="w-full h-full object-cover rounded-full size-2 " />
        </div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-800">{text}</p>
      </div>
      <div className="p-4 flex items-center justify-end">
        <a
          className="text-blue-500 hover:text-blue-600 font-semibold flex items-center"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Know More <FaArrowRight className="ml-1" />
        </a>
      </div>
    </div>
  );
};

const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Buy & Sell With Us",
      text: "One stop solution for your raw material sourcing and selling needs",
      image: bgImage1,
    },
    {
      id: 2,
      title: "Raw Materials Prices",
      text: "Get live prices for the raw materials you deal in",
      image: bgImage2,
    },
    {
      id: 3,
      title: "Raw Materials News",
      text: "Get daily raw material news & insights live from the ground",
      image: bgImage3,
    },
    {
      id: 4,
      title: "Grow With Credit",
      text: "Get access to credit for manufacturers and contractors",
      image: bgImage4,
    },
    {
      id: 5,
      title: "Industry Digital First",
      text: "Transparency on your orders, live tracking & more with our app and web",
      image: bgImage5,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {servicesData.map((service) => (
        <ServicesCard
          key={service.id}
          title={service.title}
          text={service.text}
          image={service.image}
        />
      ))}
    </div>
  );
};

export default Services;
