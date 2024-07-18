// app/mycomp/section3/First.jsx
import React from 'react';
import Image from 'next/image';
import styles from './First.module.css';

const First = () => {
  const images = [
    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
    "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
    "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
    "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
    "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
    "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg",
    "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
  ];

  // Duplicate the images array for a seamless loop
  const loopedImages = [...images, ...images];

  return (
    <div className="flex justify-around items-center bg-red-400 h-screen">
      {[styles.carousel1, styles.carousel2, styles.carousel3].map((carouselStyle, idx) => (
        <div key={idx} className={`${styles.carousel} w-64 overflow-hidden`}>
          <div className={`${styles.carouselInner} ${carouselStyle}`}>
            {loopedImages.map((image, index) => (
              <div key={index} className="w-64 h-32 flex-shrink-0">
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  width={256}
                  height={128}
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default First;