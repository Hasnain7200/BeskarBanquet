import React from 'react';
import Swal from 'sweetalert2';

const Contact = () => {

  const onSubmit1 = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c4dcb438-361b-43cd-a417-89e69040df4f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Thank You",
        text: "Our team will reach you out soon",
        icon: "success"
      });
    }
  };

  return (
    <div className='flex flex-col items-center justify-center  mt-80 mb-10' id='book'>
       <div
          className="flex  md:flex h-[45px] w-[300px] text-black border border-[#d4a373]   items-center justify-center rounded-full "
        >
          Book your Event
        </div>

{/* Form */}
       
       <form onSubmit={onSubmit1} className='mt-14 rounded-md w-[600px]  flex flex-col items-center justify-center border border-[#d4a373]'>
       {/* Name */}
        <div className=' mt-10  flex flex-col'>
          <label id='heading'>Name:</label>
          <input name='name' type='text' className=' rounded-lg w-[300px] h-[50px] bg-transparent  border-[2px] border-[#d4a373]' placeholder='Enter your name' required/>
        </div>

        {/* Phone number */}
        <div className='mt-10  flex flex-col'>
          <label id='heading'>Phone Number:</label>
          <input name='number' type='number' className=' rounded-lg w-[300px] h-[50px] bg-transparent  border-[2px] border-[#d4a373]' placeholder='Enter your number' required/>
        </div>

{/* Event start Date */}
        <div className='mt-10  flex flex-col'>
          <label id='heading'>Event start Date:</label>
          <input name='event-start-date' type='date' className=' rounded-lg w-[300px] h-[50px] bg-transparent  border-[2px] border-[#d4a373]' placeholder='Enter event start date' required/>
        </div>

        {/* Event End date */}
        <div className='mt-10  flex flex-col'>
          <label id='heading'>Event End Date:</label>
          <input name='event-end-date' type='date' className=' rounded-lg w-[300px] h-[50px] bg-transparent  border-[2px] border-[#d4a373]' placeholder='Enter event end date' required/>
        </div>

        {/*Address */}
        <div className='mt-10 flex flex-col'>
          <label id='heading'>Address:</label>
          <input name='address' type='text' className=' rounded-lg w-[300px] h-[50px] bg-transparent  border-[2px] border-[#d4a373]' placeholder='Enter your address'/>
        </div>



        <button
            className="mb-5 mt-16  font-serif md:flex h-[45px] w-[120px] text-black bg-[#d4a373]   items-center justify-center rounded-full  hover:bg-black  hover:text-[#d4a373] hover:transition-[2s] "
          >
            Book
          </button>

       </form>



     
        </div>

  )
}


export default Contact;
