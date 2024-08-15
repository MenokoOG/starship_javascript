import React from 'react';
import { useStarship } from '../context/StarshipContext';

const StarshipStatus = () => {
  const { starship, supplies, crew, shuttles } = useStarship();

  return starship ? (
    <div className="mt-4">
      <h2 className="text-xl font-bold">Starship: {starship.name}</h2>
      <div className="mt-2">
        <h3>Supplies:</h3>
        <ul>{supplies.map((supply, idx) => <li key={idx}>{supply.name}: {supply.quantity}</li>)}</ul>
      </div>
      <div className="mt-2">
        <h3>Crew:</h3>
        <ul>{crew.map((member, idx) => <li key={idx}>{member.name} - {member.role}</li>)}</ul>
      </div>
      <div className="mt-2">
        <h3>Shuttles:</h3>
        <ul>{shuttles.map((shuttle, idx) => <li key={idx}>{shuttle.name} - Fuel: {shuttle.fuelLevel}</li>)}</ul>
      </div>
    </div>
  ) : null;
};

export default StarshipStatus;
