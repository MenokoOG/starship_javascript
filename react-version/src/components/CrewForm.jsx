import React, { useState } from 'react';
import { useStarship } from '../context/StarshipContext';

const CrewForm = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const { addCrewMember } = useStarship();

  const handleAddCrew = () => {
    if (name && role) {
      addCrewMember({ name, role, performTask: (task) => console.log(`${name} is ${task}.`) });
      setName('');
      setRole('');
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Crew Member Name"
        className="p-2 border rounded mr-2"
      />
      <input
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        placeholder="Crew Member Role"
        className="p-2 border rounded mr-2"
      />
      <button onClick={handleAddCrew} className="bg-yellow-500 text-black px-4 py-2 rounded">
        Add Crew Member
      </button>
    </div>
  );
};

export default CrewForm;
