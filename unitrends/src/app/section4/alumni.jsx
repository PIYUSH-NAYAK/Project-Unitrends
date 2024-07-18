import React from 'react';
import Image from 'next/image';

const Alumni = () => {
  return (
    <section className="relative bg-black py-20">
      <div className="relative w-full h-64 md:h-96 mx-20"> {/* Adjust height as needed */}
        <Image
          src="/Alumni.webp" // Replace with your image path
          alt="Thank you to our Alumni"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="rounded-lg shadow-lg opacity-50"
        />
      </div>
      <div className="mt-8 text-center text-white px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Thank You to Our Alumni
        </h2>
        <p className="text-xl md:text-2xl">
          Your support and contributions make a difference.
        </p>
      </div>
    </section>
  );
};

export default Alumni;
