"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const q = gsap.utils.selector(container);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        scrub: true,
        start: "top top",
        end: "bottom top",
        pin: true,
        markers: false, // Disable markers
      }
    });

    timeline.fromTo(q('.item'), 
      { y: () => window.innerHeight + 100 }, // Initial position
      { y: -100, ease: "none", duration: 2, stagger: {
        amount: 4,
        from: "random",
        ease: "power1.inOut"
      }}
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="trigger flex justify-center items-center min-h-screen bg-black relative">
      {Array.from({ length: 10 }).map((_, i) => ( // Increase the number of circles to 10
        <div
          key={i}
          className="item bg-brand-one w-24 h-24 rounded-full absolute"
          style={{ top: '-100px', left: `${Math.random() * 100}vw` }}
        ></div>
      ))}
    </div>
  );
};

export default AnimatedSection;
