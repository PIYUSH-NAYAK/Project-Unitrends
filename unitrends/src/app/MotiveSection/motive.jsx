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
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:order-2 lg:ml-10">
          {animationData && (
            <div className="animation-container">
              <Player
                autoplay
                loop
                src={animationData}
                style={{ height: '250px', width: '250px' }}
              />
            </div>
          )}
        </div>
        <div className="lg:order-1 lg:mr-10">
          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6">
            <span className="text-typing_text">So, What's The </span>
            <span className="text-violet-500">Motive?</span>
          </h2>
          <p className="text-gray-300 text-lg lg:text-xl leading-relaxed mt-4">
            Here you can add the content explaining the motive or reason for creating this website. 
            Make sure to engage your audience with clear and concise information.
          </p>
        </div>
      </div>
    </div>
  );
}