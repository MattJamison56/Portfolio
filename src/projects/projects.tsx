import { useRef, useEffect, useState } from 'react';
import './projects.css'

function Projects() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);

  const images = [
    {url: "/matthewjamisonportfolio/concertbuddiehome.jpg", description: "Home Page"},
    {url: "/matthewjamisonportfolio/concertbuddieexample.jpg", description: "Example Info Page"},
    {url: "/matthewjamisonportfolio/concertbuddieloadingscreen.jpg", description: "Loading Page"}
  ];
  
// Handle arrow navigation
const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
};

const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
};

// Handle dot navigation
const goToSlide = (index: number)    => {
    setCurrentIndex(index);
};


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        root: null, // viewport
        threshold: 0.2 // Trigger when 20% of the element is visible
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('.fade-in, .slide-right, .slide-left');
    sections.forEach(section => {
      observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                // Get the video element from the ref
                const video = videoRef.current;

                if (entry.isIntersecting) {
                    // Play the video from the start when it enters the viewport
                    if(video) {
                        video.currentTime = 0; // Reset the video to start
                        video.play();
                    }
                }
                // else {
                //     // Pause and reset the video when it leaves the viewport
                //     if(video) {
                //         video.pause();
                //         video.currentTime = 0; // Reset the video to start
                //     }
                // }
            });
        },
        {
            root: null, // viewport
            threshold: 0.2 // Play when 20% of the video is visible
        }
    );

    // Start observing the video
    if(videoRef.current) {
        observer.observe(videoRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
        if(videoRef.current) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            observer.unobserve(videoRef.current);
        }
    };
}, []);

  const handleClick = () => {
    setIsShown(!isShown);
  }

  const handleClick2 = () => {
    setIsShown2(!isShown2);
  }

  return (
  <div className="projects-container">
    <span className="hej fade-in" id="about">Hey There!</span>
    <div className="about-section fade-in">
        <p className="about">
            My name is Matthew Jamison and I am a second year Computer Science student at the University of California, Irvine set to graduate at the end of 2024.
            When I'm not buried in code, you can find me buried in a good book, behind a camera making films, or hitting the gym. What excites me the most 
            about computer science is the ever-evolving nature of the field; as a new software developer, I look forward to the endless opportunities to learn, create, 
            and make a difference with tech.
        </p>
        {isShown &&(
        <p className="about">
            I specialize in AI and frontend development. Adept at creating applications that seamlessly 
            integrate AI algorithms. Self-taught in frontend technologies, including React and Angular, for crafting intuitive and visually appealing user interfaces. 
            Proficient in backend development, specifically the Spring Framework for enterprise-level Java applications and Flask for creating lightweight and efficient 
            Python-based backend solutions. I am dedicated to crafting innovative solutions that will shape the future of software development.
        </p>
        )}
    </div>
    <button className="read-but" onClick={handleClick}>{isShown ? "Read Less" : "Read More"}</button>
    <span className='div1 fade-in'>----------------------------------------------------------</span>
    <span className='projects fade-in' id="projects">Projects</span>
    <span className='div1 fade-in'>-----------</span>

    {/* This Site */}
    <span className='project-title fade-in'>My Portfolio</span>
    <span className='year fade-in'>January 2024 (In Progress)</span>
    <div className='skills-box fade-in'>
      <span className='skill'>React</span>
      <span className='skill'>GSAP</span>
      <span className='skill'>UI/UX</span>
    </div>
    <div className="about-section3 fade-in">
        <p className="about3">
        You're looking at it! I spent about a month just trying to plan what I wanted for the site and ended up on this space themed design. I chose the single page
        layout for its simplistic nature and because I wanted to have the initial warpspeed animation at the top of the site. The color palette was space themed with
        a lot of grays, blacks, and purple. I learned GSAP to create responsive animations and used the React library to assist with the process. 
        Some animations were created in Adobe After Effects and images were created in Adobe Photoshop. 
        </p>
    </div>

    <span className='div1 fade-in'>-----------</span>

    {/* The Buzz */}
    <span className='project-title fade-in'>The Buzz</span>
    <span className='year fade-in'>October 2023</span>
    <div className='skills-box fade-in'>
      <span className='skill'>React</span>
      <span className='skill'>AI</span>
      <span className='skill'>Web Scraping</span>
      <span className='skill'>UI/UX</span>
      <span className='skill'>SQL Database</span>
    </div>
    <div className="vidandabout fade-in">
      <div className="video-container slide-right"><iframe className="YouTube" src="https://www.youtube.com/embed/Pj54T2ClUgk?si=fyYrXxuOvWRzb7Cc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe></div>
      <div className="about-section2">
          <p className="about2 slide-left">
          As the lead developer of The Buzz I led a team of 3 to create an innovative news platform designed to revolutionize 
          the way users interact with news online. Leveraging cutting-edge AI technology, It provides users with concise, summarized 
          versions of the latest news articles. Our mission is to deliver up-to-date news in a digestible format, saving time and enhancing 
          understanding for our audience.
          </p>
      </div>
    </div>
    <div className="bee-video-container  fade-in"><video className="beevid"
      ref={videoRef}
      src="TheBeeSum.mp4" 
      muted 
      style={{ pointerEvents: 'none' }}
    /></div>

    <span className='div1 fade-in'>-----------</span>

    {/* Concert Buddie */}
    <span className='project-title fade-in'>Concert Buddie</span>
    <span className='year fade-in'> May 2023</span>
    <div className='skills-box fade-in'>
      <span className='skill'>Vanilla JS</span>
      <span className='skill'>Flask</span>
      <span className='skill'>APIs</span>
      <span className='skill'>UI/UX</span>
    </div>
    <div className="about-section3 fade-in">
        <p className="about3">
        ConcertBuddie was conceived as a one-stop solution for solo concert-goers, sparked by anecdotes from friends and the team's own experiences. 
        Initially conceptualized as a rave-related app, it evolved into a platform offering concert preparation advice and the potential to connect users 
        with fellow concert enthusiasts. Its primary features include providing packing lists, sharing experiences through blogs, and offering outfit 
        inspiration tailored to the concert's vibe. Our team focused on building a comprehensive inspiration page first, laying the groundwork for 
        future improvements such as connecting existing social media to the platform.
        </p>
        {isShown2 && (
          <p className="about3">
          The website was created using Python for backend and API interactions, with Flask integrating the backend to the HTML and CSS front end. 
          APIs from YouTube, Spotify, and Google Images were utilized to generate personalized content based on user input - from genre-specific packing 
          lists to blogs and outfit inspirations. Challenges like learning new technologies and API intricacies were tackled head-on, leading to innovative 
          features like a toggle switch for outfit preference and a dynamic loading screen. As ConcertBuddie looks to the future, the team aims to 
          introduce a social feature, "FindAFriend", alongside user personalization options and a more navigable interface, continuing to make concert 
          experiences more enjoyable and inclusive.
          </p>
        )}
    </div>

    <button className="read-but" onClick={handleClick2}>{isShown2 ? "Read Less" : "Read More"}</button>

    {/* Carousel */}
    <div className="carousel fade-in">
        <div className="carousel-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div className="carousel-slide" key={index}>
              <img src={image.url} alt={`Slide ${index}`} />
              <div className="description">{image.description}</div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button className="arrow prev" onClick={goToPrevious}>&#10094;</button>
        <button className="arrow next" onClick={goToNext}>&#10095;</button>

        {/* Dots Navigation */}
        <div className="carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
    </div>
    
    <a className="link-button" href="https://devpost.com/software/concertbuddie" target="_blank">See Project Page</a>


    {/* Contact/Credits */}
    <div className="contandcred fade-in">
        <span className='contact-me' id="contact">Contact Me</span>
        <span className='div1'>-----------</span>
        <div className='contact-info'>
            <span>Reach out on <a className="contact-link" href="https://www.linkedin.com/in/matthew-jamison-dev/" target='_blank'>LinkedIn</a>!</span>
            <span>matthewjamison56@gmail.com</span>
        </div>

        <span className='div1'>----------------------------------------------------------</span>
        <div className="credit">
            <span>Designed by Matthew Jamison</span>
            <span>COPYRIGHT © 2024 Matthew Jamison</span>
        </div>
    </div>

    </div>
  )
}

export default Projects
