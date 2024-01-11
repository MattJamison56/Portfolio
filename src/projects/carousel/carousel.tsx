import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"

const PhotoCarousel: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        adaptiveHeight: true
    };

    return (
        <div className="caro-container">
        <Slider {...settings}>
            <div>
                <img className="carouselslide" src="/matthewjamisonportfolio/concertbuddiehome.jpg" alt="Home Page" />
            </div>
            <div>
                <img className="carouselslide" src="/matthewjamisonportfolio/concertbuddieexample.jpg" alt="Example Info Page" />
            </div>
            <div>
                <img className="carouselslide" src="/matthewjamisonportfolio/concertbuddieloadingscreen.jpg" alt="Loading Page" />
            </div>
        </Slider>
        </div>
    );
};

export default PhotoCarousel

