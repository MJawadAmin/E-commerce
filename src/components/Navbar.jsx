import React from 'react';
import logo from '../assets/Logo.jpg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <div className="flex items-center justify-between gap-64 px-4 py-2">
        <div className='w-24 ml-8 mt-5'> <img src={logo}/></div>
          <div className="flex space-x-4">
            <span className="text-white font-semibold text-sm px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
              Home
            </span>
            <span className="text-white font-semibold text-sm px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
              About
            </span>
            <span>
              <select className="text-white font-semibold text-sm px-4 py-2 bg-transparent rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option className="text-yellow-800">Categories</option>
                <option className="text-yellow-800">Perfume</option>
                <option className="text-yellow-800">Tasbeeh</option>
                <option className="text-yellow-800">Caps</option>
                <option className="text-yellow-800">Zam zam Water</option>
                <option className="text-yellow-800">Shoes</option>
              </select>
            </span>
            <span className="text-white font-semibold text-sm px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
              Contact
            </span>
          </div>
          <div>
            <Link className=' hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white font-semibold text-sm px-4 py-2 rounded-md'>Login</Link>
            <Link className=' hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 text-white font-semibold text-sm px-4 py-2 rounded-md'>Sign up</Link>
          </div>
        </div>
        
        <div>
          {/* Search Section */}
          <div className="flex items-center space-x-2 justify-end mr-10">
            <input
              type="text"
              placeholder="Search items"
              className="rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 
              focus:ring-orange-500 focus:border-orange-500 w-96"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none 
            focus:ring-2 focus:ring-orange-500">
              Search
            </button>
          </div></div>
        </>    
  )
}

export default Navbar
