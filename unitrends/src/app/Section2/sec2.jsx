"use client";
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Image from 'next/image';

export default function Section2() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Hoodies", "T-Shirts", "Mugs", "and More!"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-black overflow-hidden">
      <nav className="flex justify-around h-20 items-center">
        {/* Navigation items */}
      </nav>
      <div className="relative flex flex-col lg:flex-row items-center justify-center w-full min-h-screen px-5 lg:px-20 py-10 lg:py-0 overflow-hidden">
        {/* Animated background circles */}
        <div className="absolute w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full left-[-6%] top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-secondary to-pink-400 animate-object1 lg:w-[600px] lg:h-[600px]"></div>
        <div className="absolute w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full left-[35%] top-[12%] bg-gradient-to-r from-secondary to-pink-400 animate-object2 lg:w-[200px] lg:h-[200px]"></div>
        
        {/* Text content */}
        <div className="z-10 w-full lg:w-1/2 px-4 lg:px-0 mb-10 lg:mb-0">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-white text-center lg:text-left">
            Show Your Spirit with Our College Gear: <br />
            <span ref={typedRef} className="text-typing_text"></span>
          </h1>
        </div>

        {/* SVG section */}
        <div className="z-10 w-full lg:w-1/2">
          <div className="relative h-full w-full flex items-center justify-center lg:transform lg:rotate-y-180">
            <Image 
              src="/section2.svg" 
              alt="SVG Image" 
              width={600} 
              height={600} 
              className="transform scale-75 md:scale-100" 
            />
          </div>
        </div>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes object1 {
          50% {
            left: -8%;
            top: 45%;
          }
        }
        @keyframes object2 {
          50% {
            left: 32%;
            top: 10%;
          }
        }
      `}</style>
    </div>
  );
}