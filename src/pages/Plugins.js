import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pluginsData } from '../data/pluginsData';
import PluginCard from '../components/PluginCard'; // Import PluginCard
import Header from '../components/Header'; // Import Header
import Footer from '../components/Footer'; // Import Footer
import '../Plugins.css'; // Path to Plugins.css
import AOS from 'aos';
import 'aos/dist/aos.css';

function Plugins() {
  const [sortOption, setSortOption] = useState('Newest');
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    setAnimationKey(prevKey => prevKey + 1); // Change key to trigger animation
    AOS.refresh(); // Reinitialize AOS animations
  };

  const sortedPlugins = [...pluginsData].sort((a, b) => {
    if (sortOption === 'Newest') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortOption === 'Most Popular') {
      return b.popularity - a.popularity;
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-yellow-500 mb-8">Explore Our Plugins</h2>
        <div className="flex mb-8">
          <label className="radio-container">
            <input
              type="radio"
              value="Newest"
              checked={sortOption === 'Newest'}
              onChange={handleSortChange}
              className="hidden"
            />
            <span className={`radio-button ${sortOption === 'Newest' ? 'active' : ''}`}>Newest</span>
          </label>
          <label className="radio-container">
            <input
              type="radio"
              value="Most Popular"
              checked={sortOption === 'Most Popular'}
              onChange={handleSortChange}
              className="hidden"
            />
            <span className={`radio-button ${sortOption === 'Most Popular' ? 'active' : ''}`}>Most Popular</span>
          </label>
        </div>
        <div
          key={animationKey} // Use animationKey to re-render this div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-offset="200"
        >
          {sortedPlugins.map(plugin => (
            <Link to={`/plugins/${plugin.id}`} key={plugin.id}>
              <PluginCard plugin={plugin} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Plugins;
