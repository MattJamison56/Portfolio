import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"

const PhotoCarousel2: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000
    };

    return (
        <div className="caro-container2">
        <Slider {...settings}>
            <div>
                <img className="carouselslide2" src="/matthewjamisonportfolio/portfolioimages/figma.png" alt="Figma Planning" />
            </div>
            <div>
            <img className="carouselslide2" src="/matthewjamisonportfolio/portfolioimages/colorpalettes.png" alt="Figma Planning" />
            </div>
            <div>
            <img className="carouselslide2" src="/matthewjamisonportfolio/portfolioimages/notion.png" alt="Figma Planning" />
            </div>
            <div>
            <img className="carouselslide2" src="/matthewjamisonportfolio/portfolioimages/ideaboard.png" alt="Figma Planning" />
            </div>
        </Slider>
        </div>
    );
};

export default PhotoCarousel2

