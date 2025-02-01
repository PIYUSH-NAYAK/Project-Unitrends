"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = () => {
  const containerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!containerRef.current || windowWidth === 0) return;

    const container = containerRef.current;
    const q = gsap.utils.selector(container);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        scrub: true,
        start: "top top",
        end: "bottom top",
        pin: true,
        markers: false,
      }
    });

    timeline.fromTo(q('.item'), 
      { y: () => container.clientHeight + 100 }, // Use container height instead of window
      { 
        y: -100, 
        ease: "none", 
        duration: 2, 
        stagger: {
          amount: 4,
          from: "random",
          ease: "power1.inOut"
        }
      }
    );

    return () => {
      timeline.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [windowWidth]); // Re-run when window width changes

  const itemSize = windowWidth < 640 ? 'w-12 h-12' : 'w-24 h-24';

  return (
    <div ref={containerRef} className="trigger flex justify-center items-center min-h-screen bg-black relative overflow-hidden z-0">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className={`item bg-brand-one ${itemSize} rounded-full absolute`}
          style={{ top: '-100px', left: `${Math.random() * 100}%` }}
        ></div>
      ))}
    </div>
  );
};

export default AnimatedSection;