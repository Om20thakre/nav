import React, { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const MenuLinks = [
    {
      id: 1,
      name: "Rates",
      link: "/Rates",
    },
    {
      id: 2,
      name: "Navy Route",
      link: "/NavyRoute",
    },
    {
      id: 3,
      name: "Orders",
      link: "/Orders",
    },
    {
      id: 4,
      name: "Login",
      link: "/Login",
    },
  ];

  const SecondMenuLinks = [
    {
      id: 5,
      name: "Agro-chemicals",
      link: "/about",
    },
    {
      id: 6,
      name: "Polymer",
      link: "/services",
    },
    {
      id: 7,
      name: "Chemicals",
      link: "/contact",
    },
    {
      id: 8,
      name: "Petroleum",
      link: "/contact",
    },
    {
      id: 9,
      name: "Ferrous",
      link: "/contact",
    },
    {
      id: 10,
      name: "Metals",
      link: "/contact",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* First navigation bar */}
      <div className='absolute w-full px-16 py-0 top-[30px] md:flex justify-around gap-[100px]'>
        <div className='logo cursor-pointer flex items-center w-[212px] h-[44px] md:ml-[-2em]'>
          <img src="logo.png" alt="Logo" />
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className='absolute right-8 top-6 cursor-pointer text-black md:hidden w-14 h-14 font-extrabold'
        >
          {open ? <MdClose /> : <CiMenuFries />}
        </div>
        <div className={`links md:flex md:items-center md:pb-0 pb-12 absolute md:static cursor-pointer ml-[400px] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-36 transition-all duration-500 ease-in ${open ? 'left-0' : 'left-[-800px]'}`}>
          {MenuLinks.map((item, index) => (
            <Link to={item.link} key={item.id}>
              <h1 className={`text-lg font-AlbertSans md:ml-[40px] ${index === 3 ? 'px-4 py-2 text-black bg-white rounded-full text-sm capitalize' : ''}`}>
                {item.name}
              </h1>
            </Link>
          ))}
        </div>
      </div>

      {/* Divider line */}
      <div className='absolute top-[100px] w-full h-px border border-slate-700'></div>

      {/* Second navigation bar */}
      <div className='absolute top-[110px] w-full  md:px-24 py-0 md:flex justify-between items-center'>
        <div className='logo cursor-pointer flex items-center'>
          <img className='w-[18px] h-[18px] m-[0px]' src="catogries.png" alt="Categories Icon" />
          <h1 className='ml-2 text-lg font-AlbertSans'>All Categories</h1>
        </div>
        <div className={`links md:flex md:items-center md:pb-0 pb-12 md:static cursor-pointer mt-4 md:mt-0 ml-0 md:ml-[400px] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-36 transition-all duration-500 ease-in ${open ? 'left-0' : 'left-[-800px]'}`}>
          {SecondMenuLinks.map((item, index) => (
            <Link to={item.link} key={item.id}>
              <h1 className={`text-lg font-AlbertSans md:ml-[20px] ${index === 0 ? 'ml-2' : ''}`}>
                {item.name}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
