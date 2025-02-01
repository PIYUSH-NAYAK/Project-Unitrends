"use client";
import { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import Image from 'next/image';

export default function Motive() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/Untitled_file.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error fetching the animation data:', error));
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b px-5 lg:px-20 py-10 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-2/3 lg:pr-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 relative">
            <span className="text-typing_text relative inline-block">
              So,
              <span className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-2 z-0">
                {animationData && (
                  <div className="animation-container">
                    <Player
                      autoplay
                      loop
                      src={animationData}
                      style={{ height: '100px', width: '100px' }}
                    />
                  </div>
                )}
              </span>
            </span>
            <span className="text-typing_text"> What's The </span>
            <span className="text-violet-500 relative inline-block">
              Motive?
              <span className="absolute top-1/2 left-full transform -translate-y-1/2 translate-x-2 z-0">
                {animationData && (
                  <div className="animation-container">
                    <Player
                      autoplay
                      loop
                      src={animationData}
                      style={{ height: '100px', width: '100px' }}
                    />
                  </div>
                )}
              </span>
            </span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed mt-4 max-w-2xl">
            Here you can add the content explaining the motive or reason for creating this website. 
            Make sure to engage your audience with clear and concise information.
          </p>
        </div>
        <div className="w-full lg:w-1/3 mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <Image 
              src="/motive.svg" 
              alt="SVG Image" 
              layout="fill"
              objectFit="contain"
              className="transform scale-150 lg:scale-125 lg:translate-x-1/4" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}