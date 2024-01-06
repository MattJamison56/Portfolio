import React, { useEffect } from 'react';
import './loadingbar.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ScrollAnimationComponentProps {
    scrollSpaceRef2: React.RefObject<HTMLDivElement>;
  }

const LoadingBar: React.FC<ScrollAnimationComponentProps> = ({ scrollSpaceRef2 }) => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to(".loading-bar", {
      scrollTrigger: {
        trigger: scrollSpaceRef2.current, // Trigger on the body scroll
        start: "top top", // When the top of the viewport hits the top of the body
        end: "bottom bottom", // Adjust as needed
        scrub: true, // Smooth scrubbing effect
      },
      opacity: 0, 
      ease: "none",
      scale: 0.1
    });

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(instance => instance.kill());
    };
  }, [scrollSpaceRef2]);

  return (
    <div className="loading-bar">
        <div className="myportfolioname">
            <p className='matt'>
                Matt Jamison
            </p>
            <p className='stick'>
               |
            </p>
            <p className='portfolio'>
               Portfolio
            </p>
        </div>
        <div className='scroll-indicator'>
            <div className="arrow1"></div>
            <p className="scroll-down">Scroll Down</p>
            <div className="arrow2"> </div>
        </div>

    </div>
  );
}

export default LoadingBar;