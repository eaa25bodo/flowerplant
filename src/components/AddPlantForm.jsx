import React, { useState } from 'react';
import './AddPlantForm.css'; // added: connect CSS

function AddPlantForm({ addPlant }) {
  const [newPlant, setNewPlant] = useState({
    commonName: '',
    scientificName: '',
    light: '',
    watering: '',
    soil: '',
    level: 'Beginner',
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlant(newPlant);
    // Reset form
    setNewPlant({
      commonName: '',
      scientificName: '',
      light: '',
      watering: '',
      soil: '',
      level: 'Beginner',
      image: null,
    });
    setImagePreview(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPlant({ ...newPlant, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPlant({ ...newPlant, image: reader.result });
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="add-plant-form">
      <h2>Add a New Plant</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Common Name:</label>
          <input
            type="text"
            name="commonName"
            value={newPlant.commonName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Scientific Name:</label>
          <input
            type="text"
            name="scientificName"
            value={newPlant.scientificName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Light Requirements:</label>
          <input
            type="text"
            name="light"
            value={newPlant.light}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Watering Schedule:</label>
          <input
            type="text"
            name="watering"
            value={newPlant.watering}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Soil Type:</label>
          <input
            type="text"
            name="soil"
            value={newPlant.soil}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Difficulty Level:</label>
          <select
            name="level"
            value={newPlant.level}
            onChange={handleChange}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
        <div className="form-group">
          <label>Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Preview" />
            </div>
          )}
        </div>
        <button type="submit" className="submit-button">
          Add Plant
        </button>
      </form>
    </div>
  );
}

export default AddPlantForm;
