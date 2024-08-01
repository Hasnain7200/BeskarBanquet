import React from "react";
import wedding from "../assets/wedding.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col  ml-16 mt-28 gap-5 md:flex-row" id="about">
      {/* left part */}
      <motion.div
       whileInView={{ opacity: 1, y:-100 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
       className="">
        <img
          src={wedding}
          alt=""
          className="h-[400px] w-[400px] rounded-2xl"
        ></img>
      </motion.div>

      {/* right part */}
      <motion.div 
        whileInView={{ opacity: 1, x:0,y:-50 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
      className="flex flex-col gap-8 w-[900px]">
        <div className="hidden md:flex h-[45px] w-[100px] text-black border border-[#d4a373]   items-center justify-center rounded-full ">
          About us
        </div>

        <span id="heading" className="text-3xl">
          Trusted By 200 + satisfied clients
        </span>
        <div className=" object-contain font-serif text-neutral-500">
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore eit esdioilore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullaemco laboeeiris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor iesdein reprehendeerit in voluptate
          velit esse cillum dolore
        </div>

        <a
            href="#book"
            className="hidden font-serif md:flex h-[45px] w-[300px] text-black bg-[#d4a373]   items-center justify-center rounded-full  hover:bg-black  hover:text-[#d4a373] hover:transition-[2s] "
          >
            Book your Event
          </a>
      </motion.div>
    </div>
  );
};

export default About;
