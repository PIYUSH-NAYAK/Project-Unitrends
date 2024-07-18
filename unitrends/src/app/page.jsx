"use client";

import React, { useEffect, useState } from 'react';
import Navbar from './mycomp/nav';
import Section2 from './Section2/sec2';
import AnimatedSection from './AnimatedSection/AnimatedSection';
import First from '../section3/first';
import Motive from './MotiveSection/motive';

export default function Home() {
  const [animationData, setAnimationData] = useState(null);


  return (
    <div className="text-white">
      <Navbar />
      <Section2 />
      <AnimatedSection />
      <Motive/>
      <First/>
    </div>
  );
}
