import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center  mx-auto px-4 text-black border-b border-neutral-200 h-[80px]">
      {/* Logo */}
      <div className="flex items-center justify-between max-w-[500px] flex-row">
        {/* <img src={} alt='Logo' className='w-[100px] h-[100px]'></img> */}
        <h1
          className="w-full  text-3xl font-bold  items-center"
          id="heading"
        >
          <span className="text-[#d4a373] " id="Beskar">
            Beskar
          </span>
          <span className="text-black">Banquet</span>
        </h1>
      </div>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer scroll-smooth hover:text-[#d4a373]">
          <a href="#home">Home</a>
        </li>
        <li className="p-4 cursor-pointer hover:text-[#d4a373]">
          <a href="#about">About</a>
        </li>

        <li className="p-4 cursor-pointer hover:text-[#d4a373]">
          <a href="#services">Services</a>
        </li>

        <li className="p-4 cursor-pointer hover:text-[#d4a373]">
          <a href="#explore">Explore</a>
        </li>

        <li className="p-4 cursor-pointer scroll-smooth hover:text-[#d4a373]">
          <a href="#book">Contact</a>
        </li>
      </ul>
      <a
        href="#about"
        className="hidden md:flex h-[45px] w-[100px] text-black bg-[#d4a373]   items-center justify-center rounded-full  hover:bg-black  hover:text-[#d4a373] hover:transition-[2s] "
      >
        Book Now
      </a>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[30%] h-full border-r border-r-gray-900  bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-l font-bold text-[#00df9a] m-4" id="heading">
        <span className="text-[#d4a373] " id="Beskar">
            Beskar
          </span>
          <span className="text-[#d4a373] ">Banquet</span>
        </h1>
        <li className="p-4 text-[#d4a373] ">Home</li>
        <li className="p-4 text-[#d4a373] ">About</li>
        <li className="p-4 text-[#d4a373] ">Services</li>
        <li className="p-4 text-[#d4a373] ">Events</li>
        <li className="p-4 text-[#d4a373] ">Conatct</li>

        <a
        href="#book"
        className="h-[45px] w-[100px] text-black bg-[#d4a373]   flex items-center justify-center rounded-full  hover:bg-black  hover:text-[#d4a373] hover:transition-[2s]"
      >
        Book Now
      </a>
      </ul>

  
    </div>
  );
};

export default Navbar;
