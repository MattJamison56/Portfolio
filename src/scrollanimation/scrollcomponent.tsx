import React, { useEffect, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./scrollcomponent.css"

interface ScrollAnimationComponentProps {
    scrollSpaceRef: React.RefObject<HTMLDivElement>;
  }

const ScrollAnimationComponent: React.FC<ScrollAnimationComponentProps> = ({ scrollSpaceRef }) => {
    // const containerRef = useRef<HTMLDivElement>(null);
    const [imageIndex, setImageIndex] = useState(0); // Current image index
    const totalImages = 56; // Total number of images

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Assuming the containerRef is the scrollable area
        const updateImageIndex = (progress: number) => {
            // Calculate the index based on scroll progress
            const index = Math.min(totalImages-1, Math.floor(progress * totalImages));
            setImageIndex(index);
        };

        // Create ScrollTrigger instance
        ScrollTrigger.create({
            trigger: scrollSpaceRef.current,
            start: "top top", 
            end: "bottom bottom",
            scrub: true,
            onUpdate: (self) => {
                updateImageIndex(self.progress);
            }
        });

        return () => {
            // Clean up ScrollTrigger instances
            ScrollTrigger.getAll().forEach(instance => instance.kill());
        };
    }, [scrollSpaceRef]);

    return (
        <div  className="framecontainer" /*ref={containerRef}}*/ >
            <img src={`/warpspeed/warpspeed_${imageIndex+16}-min.png`} alt={`Frame ${imageIndex}`} />
        </div>
    );
};

export default ScrollAnimationComponent;
