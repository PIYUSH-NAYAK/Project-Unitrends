"use client";
import { useEffect } from 'react';
import Typed from 'typed.js';

export default function Section2() {
  useEffect(() => {
    // Initialize Typed instance
    var typingEffect = new Typed(".multiText", {
      strings: ["Hoodies", "T-Shirts", "Mugs", "and More!"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
    });

    // Clean up function
    return () => {
      typingEffect.destroy(); // Cleanup Typed instance to prevent memory leaks
    };
  }, []);

  return (
    <div className="w-full min-h-[120vh] bg-black overflow-hidden">
      <nav className="flex justify-around h-20 items-center">
        {/* Navigation items */}
      </nav>
      <div className="relative flex items-center justify-center w-full min-h-[120vh] px-5 lg:px-20 overflow-hidden">
        {/* Animated background circles */}
        <div className="absolute w-[300px] h-[300px] rounded-full left-[-6%] top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-secondary to-pink-400 animate-object1 lg:w-[600px] lg:h-[600px]"></div>
        <div className="absolute w-[100px] h-[100px] rounded-full left-[35%] top-[12%] bg-gradient-to-r from-secondary to-pink-400 animate-object2 lg:w-[200px] lg:h-[200px]"></div>
        
        {/* Text content */}
        <div className="z-10 w-full lg:w-1/2 px-4 lg:px-0">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-white">
            Show Your Spirit with Our College Gear: <span className="multiText text-typing_text"></span>
          </h1>
        </div>

        {/* SVG section */}
        <div className="z-10 w-full lg:w-1/2 mt-10 lg:mt-0">
          <div className="relative h-full w-full flex items-center justify-center transform lg:rotate-y-180">
            <img 
              src="/section2.svg" 
              alt="SVG Image" 
              width={600} 
              height={600} 
              className="transform scale-[0.75] lg:scale-[1]" 
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
        @keyframes animate {
          50% {
            top: 49%;
            left: 51%;
            transform: translate(-51%, -49%) rotate(-35deg);
            width: 190%;
            filter: saturate(100%);
          }
        }
      `}</style>
    </div>
  );
}
