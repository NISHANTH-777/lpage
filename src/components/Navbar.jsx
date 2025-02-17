import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='fixed m-4 top-0 right-0 left-0 shadow-lg z-50' >
    <div className='container p-0 h-20 flex justify-between items-center'>
        <h3 className='ml-4 text-lg font-semibold'>SHANMUGI <br /> TRAVELS</h3>
        <div className='flex flex-row space-x-6 bg-slate-50'>
            <Link to="/" className=' text-slate-950 px-4 py-2 hover:bg-slate-900 hover:text-white'>HOME</Link>
            <Link to="/places" className=' text-slate-950 px-4 py-2 hover:bg-slate-900 hover:text-white'>PLACES</Link>
            <Link to="/contact" className=' text-slate-950 px-4 py-2 hover:bg-slate-900 hover:text-white'>CONTACT</Link>
            <Link to="/about" className=' text-slate-950 px-4 py-2 hover:bg-slate-900 hover:text-white'>ABOUT</Link>
            <button className=' bg-slate-300 border border-b rounded-lg w-24  '>LOGIN</button>
        </div>
    </div>
    </nav>
  )
}

export default Navbar