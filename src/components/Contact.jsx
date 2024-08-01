import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center  mt-28' id='book'>
       <div
          className="hidden md:flex h-[45px] w-[300px] text-black border border-[#d4a373]   items-center justify-center rounded-full "
        >
          Book your Event
        </div>

{/* Form */}
        <div className='flex flex-col items-center justify-center  grid md:grid-cols-3 w-[full] h-[400px]   mt-10'>
        <form className=' inline md:flex h-[45px] w-[300px] text-black border border-[#d4a373]   items-center justify-center'>
            <label>Name:<input type='text'/></label>
        </form>

        <form className=' hidden md:flex h-[45px] w-[300px] text-black border border-[#d4a373]   items-center justify-center'>
            <label>Enter Event:<input type='text'/></label>
        </form>
        <form className=' hidden md:flex h-[45px] w-[300px] text-black border border-[#d4a373]   items-center justify-center'>
            <label>Start Date:<input type='date'/></label>
        </form>
        <form className=' hidden md:flex h-[45px] w-[300px] text-black border border-[#d4a373]   items-center justify-center'>
            <label>End Date:<input type='date'/></label>
        </form>
        <form className=' hidden md:flex h-[45px] w-[300px] text-black border border-[#d4a373]   items-center justify-center'>
            <label>Food Type:<input type='text'/></label>
        </form>
        <form className=' hidden md:flex h-[45px] w-[300px] text-black border border-[#d4a373]   items-center justify-center'>
            <label>Contact:<input type='number'/></label>
        </form>

        <button
            className=" hidden font-serif md:flex h-[45px] w-[120px] text-black bg-[#d4a373]   items-center justify-center rounded-full  hover:bg-black  hover:text-[#d4a373] hover:transition-[2s] "
          >
            Book
          </button>
        </div>

        
    </div>
  )
}

export default Contact
