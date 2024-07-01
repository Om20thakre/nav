import React from 'react';
import { RxArrowRight } from 'react-icons/rx';
import Img1 from '../../assets/CategoriesImg/Img1.jpeg';
import Img2 from '../../assets/CategoriesImg/Img2.jpeg';
import Img3 from '../../assets/CategoriesImg/Img3.jpeg';
import Img4 from '../../assets/CategoriesImg/Img4.jpeg';
import Img5 from '../../assets/CategoriesImg/Img5.jpeg';
import Img6 from '../../assets/CategoriesImg/Img6.jpeg';

const CategoriesData = [
  {
    id: 1,
    img: Img1,
    title: "Steel",
    link: "/Steel",
  },
  {
    id: 2,
    img: Img2,
    title: "Non ferrous",
    link: "/Non ferrous",
  },
  {
    id: 3,
    img: Img3,
    title: "Polymers",
    link: "/Polymers",
  },
  {
    id: 4,
    img: Img4,
    title: "Chemicals",
    link: "/Chemicals",
  },
  {
    id: 5,
    img: Img5,
    title: "Energy",
    link: "/Energy",
  },
  {
    id: 6,
    img: Img6,
    title: "Agri",
    link: "/Agri",
  },
];

const Categories = () => {
  const handleViewProject = (link) => {
    // Redirect to the specified link when the project is viewed
    window.location.href = link;
  };

  return (
    <div className='m-8 sm:m-12 md:m-16 lg:m-20 xl:m-24'>
      <div className='text-black'>
        <h1 className='text-4xl text-sky-950 sm:text-5xl md:text-6xl font-normal font-Oswald uppercase mb-4 sm:mb-6'>Take a look at Our Categories</h1>
        <p className='font-AlbertSans text-sm sm:text-base max-w-lg mb-8 sm:mb-10'>Seamlessly tap into supply chain expertise. Instantly get quotations, pricing, and the latest updates</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center'>
        {CategoriesData.map((data) => (
          <div key={data.id} className='relative group'>
            <div className='bg-white rounded-lg shadow-md overflow-hidden'>
              <img src={data.img} alt={data.title} className="rounded-t-md h-72 sm:h-80 lg:h-96 w-full object-cover" />
              <div className="p-4 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-70 transition-opacity duration-300 absolute inset-0 rounded-t-md" />
              <div className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300" onClick={() => handleViewProject(data.link)}>
                <div className="flex items-center">
                  <span className="text-white text-sm sm:text-base">View All</span>
                  <RxArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
