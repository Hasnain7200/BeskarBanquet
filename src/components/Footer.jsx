import React from 'react'

const Footer = () => {
  return (
    <div className='h-[200px]  border border-neutral-200   md:flex  items-center justify-evenly gap-5 bg-[#d4a373]'>
    
      <div className="md:flex items-center justify-between  flex-row mt-5">
        {/* <img src={} alt='Logo' className='w-[100px] h-[100px]'></img> */}
        <h1
          className="  text-3xl font-bold  items-center"
          id="heading"
        >
          <span className="text-[#ffff] " id="Beskar">
            Beskar
          </span>
          <span className="text-black">Banquet</span>
        </h1>
      </div>
    <div>
   
   <p className='mt-5' id='heading'>Contact: </p>
   <p>Ismail Beskar-8805592198</p>
   
   
      <p className='mt-3' id='heading'>Email:</p>
      <p>ismailbeskar1386@gmail.com</p>

      <p className='mt-3' id='heading'>Address:</p>
      <p>Front of Police Headquaters,Solapur</p>
    </div>
    </div>
  )
}

export default Footer
