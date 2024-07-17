"use client";
import { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Motive() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/Untitled_file.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error fetching the animation data:', error));
  }, []);

  return (
    <div className="relative w-full min-h-[50vh] bg-gradient-to-b px-5 lg:px-20 py-10 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-2/3 lg:pr-8">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 whitespace-nowrap relative">
            <span className="text-typing_text relative inline-block">
              So,
              <span className="absolute top-1/2 right-[calc(100%_-_2rem)] transform -translate-y-1/2 z-0">
                {animationData && (
                  <div className="animation-container">
                    <Player
                      autoplay
                      loop
                      src={animationData}
                      style={{ height: '150px', width: '150px' }}
                    />
                  </div>
                )}
              </span>
            </span>
            <span className="text-typing_text"> What's The </span>
            <span className="text-violet-500 relative inline-block">
              Motive?
            </span>
            <span className="absolute top-1/2 left-[calc(100%_-_2rem)] transform -translate-y-1/2 z-0">
              {animationData && (
                <div className="animation-container">
                  <Player
                    autoplay
                    loop
                    src={animationData}
                    style={{ height: '150px', width: '150px' }}
                  />
                </div>
              )}
            </span>
          </h2>
          <p className="text-gray-300 text-lg lg:text-xl leading-relaxed mt-4 max-w-2xl">
            Here you can add the content explaining the motive or reason for creating this website. 
            Make sure to engage your audience with clear and concise information.
          </p>
        </div>
        <div className="lg:w-1/3 mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <div className="relative h-full w-full flex items-center justify-center transform lg:rotate-y-180">
            <img 
              src="/motive.svg" 
              alt="SVG Image" 
              width={400} 
              height={400} 
              className="transform scale-[0.75] lg:scale-[1] lg:translate-x-1/4" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}