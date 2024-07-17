"use client";

import React, { useEffect, useState } from 'react';
import Navbar from './mycomp/nav';
import Section2 from './Section2/sec2';
import AnimatedSection from './AnimatedSection/AnimatedSection';
<<<<<<< HEAD
import First from './mycomp/section3/first';
=======
import MotiveSection from './MotiveSection/motive'
>>>>>>> b9f50b6e5516eea45e1a3a03d96c0dbdaa39f820

export default function Home() {
  const [animationData, setAnimationData] = useState(null);


  return (
    <div className="text-white">
      <Navbar />
      <Section2 />
      <AnimatedSection />
<<<<<<< HEAD
      <First/>
=======
      <MotiveSection />
>>>>>>> b9f50b6e5516eea45e1a3a03d96c0dbdaa39f820
    </div>
  );
}
