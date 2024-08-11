import React from 'react'
import wedding from "../assets/weddingimg.jpeg";
import Receptions from "../assets/reception.jpeg";
import Birthday from "../assets/birthday.avif";
import { motion } from 'framer-motion';
const Services = () => {
  return (
    <div className='flex flex-col mt-96 gap-5 items-center' id='services'>

<div className="hidden md:flex h-[45px] w-[100px] text-black border border-[#d4a373]   items-center justify-center rounded-full ">
          Our Services
        </div>
        <span className="font-semibold text-3xl" id="heading">What We Offer</span>

    <motion.div
     className='max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8 mt-16 '>
        <motion.div
        whileInView={{ opacity: 1, y:0 }}
          initial={{ opacity: 0, y: 200 }}
          transition={{ duration: 0.5}}
          animate={{
    x: 0,
    y: 100,
    scale: 1,
    rotate: 0,
  }}
         className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 bg-[#d4a373] text-black duration-300 hover:bg-black hover:text-[#d4a373]'>
            <img className='w-25 mx-auto mt-[-3rem] bg-white' src={wedding} alt="/" />
            <h2 id='heading' className='text-2xl font-bold text-center py-8'>Wedding Services</h2>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>Book our hall for your dream wedding event to make it successful</p>
            </div>
            
        </motion.div>
        <motion.div
        whileInView={{ opacity: 1, y:0 }}
          initial={{ opacity: 0, y: 200 }}
          transition={{ duration: 1 }}
          animate={{
    x: 0,
    y: 100,
    scale: 1,
    rotate: 0,
  }}
         className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 bg-[#d4a373] text-black duration-300 hover:bg-black hover:text-[#d4a373]'>
            <img className='w-25 mx-auto mt-[-3rem] bg-white' src={Birthday} alt="/" />
            <h2 id='heading' className='text-2xl font-bold text-center py-8'>Birthday Events</h2>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>Book your event for your wonderfull event </p>
            </div>
            
        </motion.div>
        <motion.div
        whileInView={{ opacity: 1, y:0 }}
          initial={{ opacity: 0, y:200 }}
          transition={{ duration:1.5 }}
          animate={{
    x: 0,
    y: 100,
    scale: 1,
    rotate: 0,
  }}
         className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 bg-[#d4a373] text-black duration-300 hover:bg-black hover:text-[#d4a373]'>
            <img className='w-25 mx-auto mt-[-3rem] bg-white' src={Receptions} alt="/" />
            <h2 id='heading' className='text-2xl font-bold text-center py-8'>Receptions Events</h2>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>Book our hall to make your dream Reception event to make it successful</p>
            </div>
            
        </motion.div>
       
    
    </motion.div>
  </div>
  )
}

export default Services
