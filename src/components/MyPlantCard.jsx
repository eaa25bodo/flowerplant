import React, { useState, useEffect } from 'react';
import './MyPlantCard.css';

function MyPlantCard({ plant, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    commonName: '',
    scientificName: '',
    light: '',
    watering: '',
    soil: '',
    level: '',
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (plant) {
      setForm({
        commonName: plant.commonName || '',
        scientificName: plant.scientificName || '',
        light: plant.light || '',
        watering: plant.watering || '',
        soil: plant.soil || '',
        level: plant.level || 'Beginner',
        image: plant.image || null,
      });
      setImagePreview(plant.image || null);
    }
  }, [plant]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleImageChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((s) => ({ ...s, image: reader.result }));
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  }

  function handleSave(e) {
    e.preventDefault();
    const updated = { ...plant, ...form };
    if (typeof onEdit === 'function') onEdit(updated);
    setIsEditing(false);
  }

  function handleCancel() {
    // reset form to original plant values
    setForm({
      commonName: plant.commonName || '',
      scientificName: plant.scientificName || '',
      light: plant.light || '',
      watering: plant.watering || '',
      soil: plant.soil || '',
      level: plant.level || 'Beginner',
      image: plant.image || null,
    });
    setImagePreview(plant.image || null);
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <div className="my-plant-card">
        <div className="my-plant-image">
          {imagePreview ? (
            <img src={imagePreview} alt={form.commonName} className="my-plant-img" />
          ) : (
            <div className="no-image">No image</div>
          )}
        </div>

        <div className="my-plant-details">
          <form onSubmit={handleSave} className="my-plant-edit-form">
            <input
              name="commonName"
              value={form.commonName}
              onChange={handleChange}
              placeholder="Common name"
              required
            />
            <input
              name="scientificName"
              value={form.scientificName}
              onChange={handleChange}
              placeholder="Scientific name"
            />
            <input name="light" value={form.light} onChange={handleChange} placeholder="Light" />
            <input name="watering" value={form.watering} onChange={handleChange} placeholder="Watering" />
            <input name="soil" value={form.soil} onChange={handleChange} placeholder="Soil" />
            <select name="level" value={form.level} onChange={handleChange}>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Expert</option>
            </select>

            <div className="form-row">
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </div>

            <div className="my-plant-actions">
              <button type="submit">Save</button>
              <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="my-plant-card">
      <div className="my-plant-image">
        {plant.image ? (
          <img src={plant.image} alt={plant.commonName} className="my-plant-img" />
        ) : (
          <div className="no-image">No image</div>
        )}
      </div>
      <div className="my-plant-details">
        <h3>{plant.commonName}</h3>
        {plant.scientificName && <p className="scientific-name">{plant.scientificName}</p>}
        <p className="small">{plant.light}</p>
        <div className="my-plant-actions">
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete && onDelete(plant.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default MyPlantCard;
