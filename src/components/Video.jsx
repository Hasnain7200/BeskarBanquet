import React from "react";
import { motion } from "framer-motion";

import hallvideo from "../assets/video.mp4";

const Video = () => {
  return (
    <div
      className="md:flex  items-center justify-between mt-96 gap-5 md:flex-row md:items-center md:justify-center"
      id="explore"
    >
      {/* left part */}
      <motion.div
        whileInView={{ opacity: 1, y: -100 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        className=" md:flex"
      >
        <video
          className="w-[500px] h-[400px] rounded-lg"
          controls
          src={hallvideo}
          autoPlay
          loop
          muted
        ></video>
      </motion.div>

      {/* right part */}
      <motion.div
        whileInView={{ opacity: 1, x: 0, y: -50 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className=" md:flex flex-col gap-8 mb-20 md:w-[600px]"
      >
        <div id="heading" className="mb-5 text-xl md:flex font-bold h-[50px] w-[400px] font-serif text-[#d4a373] border border-black flex items-center justify-center rounded-full ">
          Visit Beskar Banquet
        </div>

    <div>
    <span className="mb-5 md:flex flex-col  object-contain font-serif text-neutral-500">
          BeskarBanquet is one of the most contemporary and technologically advanced
          banquet halls in Solapur. We offer specialized, all inclusive
          amenities and services which set us apart from the competition.
          Whether it's lounging at our custom bridal suite after a photoshoot or
          our one of a kind speaker system designed to project sound only at the
          dance floor, we have considered every detail and perfected your
          experience at Aurora. We take pride in the versatility and quality of
          our venue and services. Our management and staff work tirelessly to
          ensure that all events go above and beyond your expectations. Whether
          it’s a corporate event or your wedding day, let’s make it a one of a
          kind experience
        </span>
    </div>

        <a
          href="#book"
          className="flex md:items-center md:justify-center font-serif md:flex h-[45px] w-[300px] text-black bg-[#d4a373]   items-center justify-center rounded-full  hover:bg-black  hover:text-[#d4a373] hover:transition-[2s] "
        >
          Book your Event
        </a>
      </motion.div>
    </div>
  );
};

export default Video;
