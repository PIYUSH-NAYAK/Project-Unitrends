import React from 'react';
import Image from 'next/image';

const Alumni = () => {
  return (
    <section className="relative bg-black py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 mb-8 sm:mb-12"> {/* Adjusted heights */}
          <Image
            src="/Alumni.webp" // Replace with your image path
            alt="Thank you to our Alumni"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-lg shadow-lg opacity-50"
          />
        </div>
        <div className="text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Thank You to Our Alumni
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Your support and contributions make a difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Alumni;