import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { pluginsData } from '../data/pluginsData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PluginCard from '../components/PluginCard'; // Import PluginCard
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

function PluginDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const plugin = pluginsData.find(p => p.id === id);

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      offset: 200,    // Offset from the viewport top
      once: true,     // Animate only once
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !isVideoPlaying,
    autoplaySpeed: 3000,
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.addEventListener('play', handleVideoPlay);
      videoElement.addEventListener('pause', handleVideoPause);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('play', handleVideoPlay);
        videoElement.removeEventListener('pause', handleVideoPause);
      }
    };
  }, [videoRef]);

  const handleBackClick = () => {
    navigate('/plugins');
  };

  const getRecommendations = () => {
    if (!plugin || pluginsData.length < 2) return [];

    const filteredPlugins = pluginsData.filter(p => p.id !== plugin.id);
    const shuffled = [...filteredPlugins].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  if (!plugin) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <Header />
        <div className="text-center">
          <p className="text-gray-300">The plugin you are looking for does not exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto py-12 px-4">
        <button
          onClick={handleBackClick}
          className="mb-6 py-2 px-4 bg-gray-700 text-white font-bold rounded-md hover:bg-gray-800"
          data-aos="fade-up" // AOS animation attribute
        >
          Back to Plugins
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="carousel-container space-y-4" data-aos="fade-up">
            <Slider {...settings}>
              {plugin.images.map((img, index) => (
                <div key={index} className="relative" data-aos="fade-up">
                  <img src={img} alt={plugin.title} className="w-full rounded-md" />
                </div>
              ))}
              {plugin.video && (
                <div className="relative" data-aos="fade-up">
                  <iframe
                    ref={videoRef}
                    width="100%"
                    height="315"
                    src={plugin.video}
                    title={plugin.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-md"
                  ></iframe>
                </div>
              )}
            </Slider>
          </div>
          <div data-aos="fade-up">
            <h1 className="text-4xl font-bold text-yellow-500 mb-4">
              {plugin.title}
            </h1>
            <p className="text-gray-300 mb-6">
              {plugin.description}
            </p>
            <a 
              href={plugin.downloadLink} 
              className="inline-block py-2 px-4 bg-yellow-500 text-gray-900 font-bold rounded-md hover:bg-yellow-600"
              data-aos="fade-up"
            >
              Download
            </a>
          </div>
        </div>
        <div className="mt-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-yellow-500 mb-4">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {getRecommendations().map((rec) => (
              <PluginCard key={rec.id} plugin={rec} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PluginDetail;
