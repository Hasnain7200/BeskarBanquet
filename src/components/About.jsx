import React from "react";
import wedding from "../assets/wedding.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="md:flex flex-col items-center justify-center  mt-80 gap-5 md:flex-row md:items-center md:justify-center"
      id="about"
    >
      {/* left part */}
      <motion.div
        whileInView={{ opacity: 1, y: -100 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className="md:flex"
      >
        <img
          src={wedding}
          alt=""
          className="h-[400px] w-[400px] rounded-2xl flex items-center justify-center"
        ></img>
      </motion.div>

      {/* right part */}
      <motion.div
        whileInView={{ opacity: 1, x: 0, y: -50 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="md:flex flex-col gap-8 mb-20 md:w-[600px] "
      >
        <div className=" md:flex h-[45px] w-[100px] text-black border border-[#d4a373] flex items-center justify-center rounded-full ">
          About us
        </div>

        <span id="heading" className="text-3xl object-contain">
          Visit our Site
        </span>
        <span className=" font-serif text-neutral-500">
          With state of the art technologies and first class service, BeskarBanquet was
          designed from the ground up to make your event the most memorable. We
          have spent countless hours thinking about all the details and
          enhancing this beautiful venue with features so you can concentrate on
          what is more important: having an amazing time with your guests.
        </span>

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
