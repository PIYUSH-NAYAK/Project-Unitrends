"use client";

import React, { useEffect, useState } from 'react';
import Navbar from './mycomp/nav';
import Section2 from './Section2/sec2';
import AnimatedSection from './AnimatedSection/AnimatedSection';
import MotiveSection from './MotiveSection/motive'

export default function Home() {
  const [animationData, setAnimationData] = useState(null);


  return (
    <div className="text-white">
      <Navbar />
      <Section2 />
      <AnimatedSection />
      <MotiveSection />
    </div>
  );
}
