import React from 'react'
import Places from '../components/Places';
import Contact from '../components/Contact';
import About from '../components/About';


const Home = () => {
  return (
    <>
    <div className='bg-gray-200 relative'>
        <div className='bg-slate-300 flex flex-col items-center p-4 h-60 mt-24 ' >
            <h1 className='font-bold text-2xl text-red-900 mt-6'>SHANMUGI TRAVELS</h1>
            <p className='font-serif text-xl ml-6 mt-6'>“At SHANMUGI TRAVELS, we believe that travel should be sustainable and responsible. We are committed to minimizing our impact on the environment and supporting local communities wherever we go.
                 We also believe in providing our customers with exceptional service every step of the way.”</p>
             <button className='bg-slate-400  p-2 mt-6 border border-b-gray-800 rounded-full w-36'>EXPLORE NOW</button>
        </div>
    </div>
    <Places />
    <Contact />
    <About />
   
    </>
  );
};

export default Home