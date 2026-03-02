import React, { useState, useEffect } from "react";
import MyPlantCard from "./MyPlantCard";
import AddPlantForm from "./AddPlantForm";
import "./MyPlants.css";

export default function MyPlants() {
  const [plants, setPlants] = useState(() => {
    try {
      const saved = localStorage.getItem("myPlants");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [showForm, setShowForm] = useState(false); // <-- added

  useEffect(() => {
    localStorage.setItem("myPlants", JSON.stringify(plants));
  }, [plants]);

  const addPlant = (newPlant) => {
    const plantWithId = { ...newPlant, id: Date.now().toString() };
    setPlants((prev) => [...prev, plantWithId]);
  };

  const deletePlant = (id) => {
    setPlants((prev) => prev.filter((p) => p.id !== id));
  };

  const editPlant = (updatedPlant) => {
    setPlants((prev) => prev.map((p) => (p.id === updatedPlant.id ? updatedPlant : p)));
  };

  return (
    <section className="my-plants">
      <header className="my-plants__header">
        <h1>My Plants</h1>
        <button className="toggle-add-btn" onClick={() => setShowForm((s) => !s)}>
          {showForm ? "Close" : "Add plant"}
        </button>
      </header>

      <div className="my-plants__add">
        {showForm && (
          <AddPlantForm
            addPlant={(data) => {
              addPlant(data);
              setShowForm(false); // close after add
            }}
            onCancel={() => setShowForm(false)}
          />
        )}
      </div>

      <div className="my-plant-gallery">
        {plants.length > 0 ? (
          plants.map((plant) => (
            <MyPlantCard
              key={plant.id}
              plant={plant}
              onDelete={deletePlant}
              onEdit={editPlant}
            />
          ))
        ) : (
          <p>No plants added yet. Start by adding a new plant!</p>
        )}
      </div>
    </section>
  );
}
