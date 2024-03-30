import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const TopNavBar = () => {
  return (
    <nav className="w-full py-4 bg-blue-800 shadow">
        <div className="w-full container max-w-5xl mx-auto flex flex-wrap items-center justify-between">
    
            <nav>
                <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
                    <li><a className="hover:text-gray-200 hover:underline px-4" href="#">Shop</a></li>
                    <li><a className="hover:text-gray-200 hover:underline px-4" href="#">About</a></li>
                </ul>
            </nav>
    
            <div className="flex items-center text-lg no-underline text-white pr-6">
      <a className="" href="#">
        <FaFacebook className="mr-4" />
      </a>
      <a className="" href="#">
        <FaInstagram className="mr-4" />
      </a>
      <a className="" href="#">
        <FaTwitter className="mr-4" />
      </a>
      <a className="" href="#">
        <FaLinkedin />
      </a>
    </div>
        </div>
    
    </nav>
  )
}

export default TopNavBar