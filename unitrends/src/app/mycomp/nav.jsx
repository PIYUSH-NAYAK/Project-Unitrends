"use client";
import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Effect to hide the sidebar when the screen size increases beyond a certain width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check the size initially

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-black bg-opacity-40 text-white shadow-md">
      <ul
        className={`fixed top-0 right-0 h-screen transform ${
          sidebarVisible ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out flex-col items-start justify-start bg-black backdrop-blur-md shadow-xl w-48 md:w-64 list-none`}
      >
        <li onClick={() => setSidebarVisible(false)}>
          <a href="#" className="w-full flex items-center p-4 hover:bg-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26"
              viewBox="0 96 960 960"
              width="26"
            >
              <path
                d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
                fill="white"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="w-full text-white flex items-center p-4 hover:bg-red-600 rounded-full"
          >
            EQUINOX
          </a>
        </li>
        <li>
          <a
            href="#"
            className="w-full text-white flex items-center p-4 hover:bg-green-600 rounded-full"
          >
            ENSPIRE
          </a>
        </li>
        <li>
          <a
            href="#"
            className="w-full text-white flex items-center p-4 hover:bg-yellow-600 rounded-full"
          >
            ABOUT US
          </a>
        </li>
        <li>
          <a
            href="#"
            className="w-full text-white flex items-center p-4 hover:bg-blue-600 rounded-full"
          >
            REGISTER
          </a>
        </li>
        <li>
          <a
            href="#"
            className="w-full text-white flex items-center p-4 hover:bg-blue-600 rounded-full"
          >
            LOGIN
          </a>
        </li>
      </ul>
      <ul className="flex justify-end items-center w-full list-none">
        <li className="mr-auto">
          <a href="#" className="flex items-center h-12 px-8 text-white text-xl">
            UNITRENDS
          </a>
        </li>
        <li className="hidden md:flex">
          <a
            href="#"
            className="flex items-center h-12 px-8 text-white hover:bg-red-600 rounded-full"
          >
            EQUINOX
          </a>
        </li>
        <li className="hidden md:flex">
          <a
            href="#"
            className="flex items-center h-12 px-8 text-white hover:bg-green-600 rounded-full"
          >
            ENSPIRE
          </a>
        </li>
        <li className="hidden md:flex">
          <a
            href="#"
            className="flex items-center h-12 px-8 text-white hover:bg-yellow-600 rounded-full"
          >
            ABOUT US
          </a>
        </li>
        <li className="hidden md:flex">
          <a
            href="#"
            className="flex items-center h-12 px-6 text-white hover:bg-blue-600 rounded-full"
          >
            REGISTER
          </a>
        </li>
        <li className="hidden md:flex">
          <a
            href="#"
            className="flex items-center h-12 px-8 text-white hover:bg-blue-600 rounded-full "
          >
            LOGIN
          </a>
        </li>
        <li
          className="md:hidden"
          onClick={() => setSidebarVisible(!sidebarVisible)}
        >
          <a href="#" className="flex items-center h-12 px-8 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26"
              viewBox="0 96 960 960"
              width="26"
            >
              <path
                d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"
                fill="white"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
