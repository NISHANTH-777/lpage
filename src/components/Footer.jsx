import React from 'react'

const Footer = () => {
  return (
    <div>
        <div>
            <div>
                <h2 className='text-center p-6 font-bold '>SHANMUGI TRAVELS</h2>
                <p className='flex flex-col justify-center items-center p-2 space-y-3 ml-8'>Spend some times in travelling jouring to be better in your life journey.</p>
            </div>
            </div>
                <form className='flex flex-row justify-center items-center p-2 space-y-3 ml-8' action="">
                    <input  className='border border-b ' type="email" placeholder='Enter Your Email' />
                    <button className=' bg-slate-600 border-b rounded-lg h-9 w-16'>Sign In</button>
                </form>
    </div>
  );
};

export default Footer