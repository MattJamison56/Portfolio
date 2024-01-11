import './loadingscreen.css';
import { useState, useEffect } from 'react';

function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0); // Add state for progress
    const totalImages = 56; // Total number of images as in ScrollAnimationComponent

    useEffect(() => {
        preloadImages();
    }, []);

    const preloadImages = () => {
        let loadedImages = 0;
        for (let i = 0; i < totalImages; i++) {
            const img = new Image();
            img.src = `/matthewjamisonportfolio/warpspeed/warpspeed_${i + 16}-min.png`;
            img.onload = () => {
                loadedImages++;
                setProgress((loadedImages / totalImages) * 100); // Update progress
                if (loadedImages === totalImages) {
                    setIsLoading(false);
                }
            };
        }
    };

    if (isLoading) {
        return (
            <div className="screen">
                <p className="loading-text">Loading...</p>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${progress}%` }}></div>
                </div>
                <img src="/matthewjamisonportfolio/warpspeed/warpspeed_16-min.png" className="stah" />
            </div>
        );
    } else {
        return null;
    }
}

export default LoadingScreen;
