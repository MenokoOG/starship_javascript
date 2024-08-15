import React, { useState } from 'react';
import { useStarship } from '../context/StarshipContext';

const StarshipForm = () => {
  const [name, setName] = useState('');
  const { setStarship } = useStarship();

  const handleCreate = () => {
    if (name) {
      setStarship({ name });
      setName('');
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter starship name"
        className="p-2 border rounded mr-2"
      />
      <button onClick={handleCreate} className="bg-yellow-500 text-black px-4 py-2 rounded">
        Create Starship
      </button>
    </div>
  );
};

export default StarshipForm;
