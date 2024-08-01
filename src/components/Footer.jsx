import React from 'react'

const Footer = () => {
  return (
    <div className='h-[80px] w-full border-t border-neutral-200  flex items-center justify-evenly gap-5'>
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
      <p>Contact</p>
      <p>Email</p>
      <p>Address</p>
    </div>
  )
}

export default Footer
