import React, { useState, useMemo } from 'react';
import PlantCard from './PlantCard';
import './Home.css';

const predefinedPlants = [
	{
		commonName: 'Snake Plant',
		scientificName: 'Sansevieria trifasciata',
		light: 'Low to bright indirect light',
		watering: 'Every 2-3 weeks',
		soil: 'Well-draining cactus or succulent mix',
		level: 'Beginner',
	},
	{
		commonName: 'Spider Plant',
		scientificName: 'Chlorophytum comosum',
		light: 'Bright, indirect sunlight',
		watering: 'Every 1-2 weeks',
		soil: 'Well-draining potting mix',
		level: 'Intermediate',
	},
	{
		commonName: 'Fiddle-Leaf Fig',
		scientificName: 'Ficus lyrata',
		light: 'Bright, indirect light (6+ hrs)',
		watering: 'When top 2-3 inches of soil are dry',
		soil: 'Well-draining, peat-based mix with perlite',
		level: 'Expert',
	},
];

export default function Home() {
	const [query, setQuery] = useState('');

	const filteredPlants = useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q) return predefinedPlants;
		return predefinedPlants.filter((p) => {
			return (
				(p.commonName && p.commonName.toLowerCase().includes(q)) ||
				(p.scientificName && p.scientificName.toLowerCase().includes(q)) ||
				(p.light && p.light.toLowerCase().includes(q)) ||
				(p.soil && p.soil.toLowerCase().includes(q))
			);
		});
	}, [query]);

	return (
		<div className="home">
			<div className="home__hero">
				<h1>Welcome to FlowerPlant</h1>
				<p className="hero-sub">Discover our collection of plant care guides.</p>
			</div>

			<div className="home__search">
				<input
					type="search"
					className="search-bar"
					placeholder="Search plants by name, scientific name, light or soil..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					aria-label="Search plants"
				/>
			</div>

			<div className="plant-gallery">
				{filteredPlants.length > 0 ? (
					filteredPlants.map((plant, i) => (
						<PlantCard key={plant.commonName || i} plant={plant} />
					))
				) : (
					<p style={{ textAlign: 'center', color: '#666' }}>
						No plants match your search.
					</p>
				)}
			</div>
		</div>
	);
}