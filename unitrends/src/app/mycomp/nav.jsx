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
            className="w-full text-white flex items-center p-4 hover:bg-black"
          >
            EQUINOX
          </a>
        </li>
        <li>
          <a
            href="#"
            className="w-full text-white flex items-center p-4 hover:bg-black"
          >
            ENSPIRE
          </a>
        </li>
        <li>
          <a
            href="#"
            className="w-full text-white flex items-center p-4 hover:bg-black"
          >
            ABOUT US
          </a>
        </li>
        <li>
          <a
            href="#"
            className="w-full text-white flex items-center p-4 hover:bg-black"
          >
            REGISTER{" "}
          </a>
        </li>
        <li>
          <a
            href="#"
            className="w-full text-white flex items-center p-4 hover:bg-black"
          >
            LOGIN
          </a>
        </li>
      </ul>
      <ul className="flex justify-end items-center w-full list-none">
        <li className="mr-auto">
          <a href="#" className="flex items-center h-12 px-8 text-blue-600">
            <span className="text-white">UNI</span>
            <span className="text-blue-700">TRENDS</span>
          </a>
        </li>
        <li className="hidden md:flex">
          <a
            href="#"
            className="flex items-center h-12 px-8 text-white hover:bg-black"
          >
            <span className="text-white">EQUI</span>
            <span className="text-blue-700">NOX</span>
          </a>
        </li>
        <li className="hidden md:flex">
          <a
            href="#"
            className="flex items-center h-12 px-8 text-white hover:bg-black"
          >
            <span className="text-white">ENS</span>
            <span className="text-blue-700">PIRE</span>
          </a>
        </li>
        <li className="hidden md:flex">
          <a
            href="#"
            className="flex items-center h-12 px-8 text-white hover:bg-black"
          >
            <span className="text-white mr-2">ABOUT</span>
            <span className="text-blue-700"> US</span>
          </a>
        </li>
        <li className="hidden md:flex">
          <a
            href="#"
            className="flex items-center h-12 px-8 text-white hover:bg-black"
          >
            <span className="text-white">REG</span>
            <span className="text-blue-700">ISTER</span>
          </a>
        </li>
        <li className="hidden md:flex">
          <a
            href="#"
            className="flex items-center h-12 px-8 text-white hover:bg-black"
          >
            <span className="text-white">LO</span>
            <span className="text-blue-700">GIN</span>
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
