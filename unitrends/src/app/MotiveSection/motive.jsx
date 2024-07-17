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
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 whitespace-nowrap text-center relative">
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
        <p className="text-gray-300 text-lg lg:text-xl leading-relaxed mt-4 text-center max-w-2xl mx-auto">
          Here you can add the content explaining the motive or reason for creating this website. 
          Make sure to engage your audience with clear and concise information.
        </p>
      </div>
    </div>
  );
}