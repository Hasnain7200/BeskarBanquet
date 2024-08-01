import React from 'react'
import wedding from "../assets/wedding.jpeg";
import { motion } from 'framer-motion';
const Services = () => {
  return (
    <div className='flex flex-col mt-16 gap-5 items-center' id='services'>

<div className="hidden md:flex h-[45px] w-[100px] text-black border border-[#d4a373]   items-center justify-center rounded-full ">
          Our Services
        </div>
        <span className="font-semibold text-3xl" id="heading">What We Offer</span>

    <motion.div
     className='max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8 mt-10 '>
        <motion.div
        whileInView={{ opacity: 1, y:0 }}
          initial={{ opacity: 0, y: 150 }}
          transition={{ duration: 1.5 }}
         className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 bg-[#d4a373] text-black duration-300 hover:bg-black hover:text-[#d4a373]'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={wedding} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Wedding Services</h2>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>Contrary to popular belief, ipsum is not simply random.</p>
            </div>
            
        </motion.div>
        <motion.div
        whileInView={{ opacity: 1, y:0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
         className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 bg-[#d4a373] text-black duration-300 hover:bg-black hover:text-[#d4a373]'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={wedding} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Wedding Services</h2>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>Contrary to popular belief, ipsum is not simply random.</p>
            </div>
            
        </motion.div>
        <motion.div
        whileInView={{ opacity: 1, y:0 }}
          initial={{ opacity: 0, y: 150 }}
          transition={{ duration: 0.5 }}
         className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 bg-[#d4a373] text-black duration-300 hover:bg-black hover:text-[#d4a373]'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={wedding} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Wedding Services</h2>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>Contrary to popular belief, ipsum is not simply random.</p>
            </div>
            
        </motion.div>
       
    
    </motion.div>
  </div>
  )
}

export default Services
