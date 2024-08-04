import React from 'react';
import { Link } from 'react-router-dom';

function PluginCard({ plugin }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg w-full max-w-xs mx-auto">
      <img src={plugin.coverImage} alt={plugin.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{plugin.title}</h3>
        <Link to={`/plugins/${plugin.id}`} className="mt-2 inline-block text-yellow-500 hover:underline">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default PluginCard;
