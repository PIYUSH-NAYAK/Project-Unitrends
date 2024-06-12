"use client"
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showSidebar = () => setSidebarVisible(true);
  const hideSidebar = () => setSidebarVisible(false);

  return (
    <nav className="bg-black text-white shadow-md">
      <ul className={`fixed top-0 right-0 h-screen ${sidebarVisible ? 'flex' : 'hidden'} flex-col items-start justify-start bg-white/15 backdrop-blur-md shadow-xl w-64 md:w-80 list-none`}>
        <li onClick={hideSidebar}>
          <a href="#" className="w-full flex items-center p-4 hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
              <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
            </svg>
          </a>
        </li>
        <li><a href="#" className="w-full text-white flex items-center p-4 hover:bg-gray-200">Equinox</a></li>
        <li><a href="#" className="w-full text-white flex items-center p-4 hover:bg-gray-200">Enspire</a></li>
        <li><a href="#" className="w-full text-white flex items-center p-4 hover:bg-gray-200">About us</a></li>
        <li><a href="#" className="w-full text-white flex items-center p-4 hover:bg-gray-200">Login</a></li>
      </ul>
      <ul className="flex justify-end items-center w-full list-none">
        <li className="mr-auto"><a href="#" className="flex items-center h-12 px-8 text-white">Unitrends</a></li>
        <li className="hidden md:flex"><a href="#" className="flex items-center h-12 px-8 text-white hover:bg-gray-200">Equinox</a></li>
        <li className="hidden md:flex"><a href="#" className="flex items-center h-12 px-8 text-white hover:bg-gray-200">Enspire</a></li>
        <li className="hidden md:flex"><a href="#" className="flex items-center h-12 px-8 text-white hover:bg-gray-200">About us</a></li>
     
        <li className="hidden md:flex"><a href="#" className="flex items-center h-12 px-8 text-white hover:bg-gray-200">Login</a></li>
        <li className="md:hidden" onClick={showSidebar}>
          <a href="#" className="flex items-center h-12 px-8 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
              <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
