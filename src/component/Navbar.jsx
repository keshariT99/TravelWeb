import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='fixed m-4 top-0 right-0 left-0 shadow-lg z-50 bg-white'>
        <div className='container px-4 flex justify-between items-center h-16'>
        <img
              src="/Images/logo.png" alt="Company Logo" className="w-16 h-16"/>
            <h3 className=' text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-500 to-orange-500'> TravelBug </h3>
            <div className='hidden md:flex space-x-4 text-sm font-bold items-center'>
                <Link to="/" className='px-6 py-2 rounded-lg hover:bg-orange-600 hover:text-white'>Home</Link>
                <Link to="/gallery" className='px-6 py-2 rounded-lg hover:bg-orange-600 hover:text-white'>Gallery</Link>
                <Link to="/contact" className='px-6 py-2 rounded-lg hover:bg-orange-600 hover:text-white'>Contact</Link>
                <Link to="/about" className='px-6 py-2 rounded-lg hover:bg-orange-600 hover:text-white'>About</Link>
                <Link to="/login" className='py-2 px-6 border border-orange-300 rounded-lg bg-grey-300 hover:bg-orange-400'>
                    Login
                </Link>
            </div>
            <div className='md:hidden'>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </div>
        {isOpen &&(
            <div className='md:hidden flex space-y-6 py-4 flex-col bg-white items-center'>
            <Link to="/" className='px-6 py-2 hover:bg-orange-600 hover:text-white'>Home</Link>
            <Link to="/gallery" className='px-6 py-2 hover:bg-orange-600 hover:text-white'>Gallery</Link>
            <Link to="/contact" className='px-6 py-2 hover:bg-orange-600 hover:text-white'>Contact</Link>
            <Link to="/about" className='px-6 py-2 hover:bg-orange-600 hover:text-white'>About</Link>
            <button className='py-2 px-6 border rounded-lg bg-orange-300 '>Login</button>
        </div>
        )}
    </nav>
  )
}
