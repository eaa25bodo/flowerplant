import React from 'react';
import { FaSun, FaTint, FaSeedling, FaLeaf } from 'react-icons/fa';
import figImg from '../assets/fig.avif';
import snakeImg from '../assets/snakeplant2.webp';
import spiderImg from '../assets/spiderplant.avif';
import './PlantCard.css';

function PlantCard({ plant = {} }) {
  const images = {
    'Fiddle-Leaf Fig': figImg,
    'Snake Plant': snakeImg,
    'Spider Plant': spiderImg,
  };

  const src = plant.img || images[plant.commonName] || '';

  return (
    <div className="plant-card">
      <div className="plant-image">
        {src ? (
          <img src={src} alt={plant.commonName || 'plant'} className="plant-img" />
        ) : (
          <div className="plant-placeholder">No image</div>
        )}
      </div>
      <div className="plant-details">
        <h3 className="plant-title">{plant.commonName}</h3>
        <p className="scientific-name">{plant.scientificName}</p>
        <div className="plant-needs">
          <div className="need">
            <FaSun className="icon" />
            <span>{plant.light}</span>
          </div>
          <div className="need">
            <FaTint className="icon" />
            <span>{plant.watering}</span>
          </div>
          <div className="need">
            <FaSeedling className="icon" />
            <span>{plant.soil}</span>
          </div>
          <div className="need">
            <FaLeaf className="icon" />
            <span>{plant.level}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantCard;
