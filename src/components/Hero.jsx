import React from "react";
import { motion } from "framer-motion";
import finial from "../assets/finial.png";
const Hero = () => {
  return (
    <div className="py-6 my-6 mt-16 flex flex-col items-center justify-between w-full h-[500px] md:flex-row" id="home">
      {/* <Right Part */}

      {/* heading */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center ml-5 gap-5"
        id="heading"
      >
        <motion.div
          className="hidden md:flex h-[45px] w-[300px] text-black border border-[#d4a373]   items-center justify-center rounded-full "
          id="heading"
        >
          Welcome to Beskar Banquet
        </motion.div>

        <span className="text-black text-4xl">
          Book
          <span className="text-[#d4a373] ">BeskarBanquet</span>
          For
        </span>
        <span className="text-black text-4xl"> Your Dream Event</span>

        {/* Buttons */}
        <motion.div
          className="flex flex-row gap-7 mt-5"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
        >
          <a
            href="#book"
            className="hidden font-serif md:flex h-[45px] w-[120px] text-black bg-[#d4a373]   items-center justify-center rounded-full  hover:bg-black  hover:text-[#d4a373] hover:transition-[2s] "
          >
            Book Now
          </a>

          <a
            href="#book"
            className="hidden font-serif md:flex h-[45px] w-[120px] text-black bg-[#d4a373]   items-center justify-center rounded-full  hover:bg-black  hover:text-[#d4a373] hover:transition-[2s] "
          >
            Conatct
          </a>
        </motion.div>
      </motion.div>

      {/* left Part */}
      {/* image conatiner */}
      <motion.div
         whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
        className="w-[500px] mr-8 " 
      >
        <img src={finial} alt="" className=" rounded-xl  shadow-xl"></img>
      </motion.div>
    </div>
  );
};

export default Hero;
