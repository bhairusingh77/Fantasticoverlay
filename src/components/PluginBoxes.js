// src/components/PluginBoxes.js
import React from 'react';
import { Link } from 'react-router-dom';
import { pluginsData } from '../data/pluginsData'; // Use your plugins data file

const PluginBox = ({ box, isReversed }) => (
  <div className={`flex items-center border-4 border-yellow-400 rounded-lg overflow-hidden mb-6 ${isReversed ? 'flex-row-reverse' : 'flex-row'}`}>
    <img
      src={box.coverImage}
      alt={box.title}
      className="w-1/2 h-auto object-cover rounded-l-lg"
    />
    <div className="p-4 w-1/2">
      <h3 className="text-xl font-bold mb-2">{box.title}</h3>
      <p className="text-sm mb-4">{box.description}</p>
      <Link to={`/plugins/${box.id}`} className="text-yellow-500 hover:underline">View Details</Link>
    </div>
  </div>
);

const getNewestAndPopularPlugins = () => {
  const sortedByDate = [...pluginsData].sort((a, b) => new Date(b.date) - new Date(a.date));
  const sortedByPopularity = [...pluginsData].sort((a, b) => b.popularity - a.popularity);

  return {
    newest: sortedByDate.slice(0, 1), // Take the top 1 newest plugin
    popular: sortedByPopularity.slice(0, 1) // Take the top 1 popular plugin
  };
};

const PluginBoxes = () => {
  const { newest, popular } = getNewestAndPopularPlugins();

  return (
    <div className="plugin-boxes-container mt-12">
      <h2 className="text-2xl font-bold mb-4 text-center">Newest and Popular Plugins</h2>
      <div className="container mx-auto px-4">
        {newest.map((box, index) => (
          <PluginBox key={box.id} box={box} isReversed={index % 2 !== 0} />
        ))}
        {popular.map((box, index) => (
          <PluginBox key={box.id} box={box} isReversed={index % 2 !== 0} />
        ))}
      </div>
    </div>
  );
};

export default PluginBoxes;
