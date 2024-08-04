import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../index.css'; // Import custom CSS for gradient effect
import { boxImagesData } from '../data/boxImagesData'; // Import the new data file

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const carouselItems = [
  {
    imgSrc: 'https://i.imgur.com/ntgpU9c.png',
    altText: 'Preset 1',
    title: 'Download now',
    description: 'Enhance your projects with this amazing preset.',
  },
  {
    imgSrc: 'https://moosend.com/wp-content/uploads/2021/07/feature-promotion-landing-page-layout.png',
    altText: 'Preset 2',
    title: 'Amazing Preset 2',
    description: 'Take your creativity to the next level with this preset.',
  },
  // Add more items as needed
];

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      once: true, // Ensure animations trigger only once
    });

    // Set initial AOS animations
    AOS.refresh();

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % boxImagesData.length); // Cycle through box images
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const renderBoxes = () => {
    return boxImagesData.map((box, index) => (
      <div
        key={box.id}
        className={`box ${index === activeIndex ? 'box-active' : 'box-inactive'}`}
      >
        <img
          src={box.imageUrl || 'https://via.placeholder.com/150'}
          alt={`Box ${index + 1}`}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="overlay">
          <h3 className={`text-white ${index === activeIndex ? 'text-lg font-bold' : 'text-sm'}`}>{`Box ${index + 1}`}</h3>
        </div>
      </div>
    ));
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white">
      <Header />

      {/* Carousel */}
      <div 
        className="carousel-container relative w-full max-w-2xl mx-auto mt-12 z-10" 
        data-aos="zoom-in" // Change to zoom-in effect
        data-aos-offset="200"
      >
        <Slider {...carouselSettings}>
          {carouselItems.map((item, index) => (
            <div key={index} className="relative flex items-center justify-center" data-aos="zoom-in">
              <img 
                src={item.imgSrc} 
                alt={item.altText} 
                className="w-full h-60 object-cover rounded-t-xl shadow-lg" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent text-white flex flex-col items-center justify-center p-6 rounded-t-xl">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-4">{item.title}</h3>
                <p className="text-base sm:text-lg lg:text-xl text-center">{item.description}</p>
              </div>
              <div className="gradient-fade-bottom"></div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Boxes Section */}
      <div className="boxes-container flex justify-center items-center mt-12" data-aos="fade-up" data-aos-offset="200">
        {renderBoxes()}
      </div>

      <main className="flex-grow flex flex-col justify-center items-center text-center p-5 space-y-6 z-10">
        <h2 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
        >
          Discover Amazing Presets
        </h2>
        <p 
          className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="200"
        >
          Explore and download high-quality presets and plugins to elevate your projects and boost your creativity.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link 
            to="/plugins" 
            className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gradient-to-l hover:from-yellow-500 hover:to-yellow-700 transition-transform transform hover:scale-105 hover:shadow-lg no-underline"
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-delay="300"
          >
            Browse Plugins
          </Link>
          <Link 
            to="/about" 
            className="px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gradient-to-l hover:from-blue-500 hover:to-blue-700 transition-transform transform hover:scale-105 hover:shadow-lg no-underline"
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-delay="400"
          >
            Learn More
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
