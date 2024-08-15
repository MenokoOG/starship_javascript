import React, { useState } from 'react';
import { useStarship } from '../context/StarshipContext';

const SupplyForm = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const { addSupply } = useStarship();

  const handleAddSupply = () => {
    if (name && quantity) {
      addSupply({ name, quantity: parseInt(quantity, 10), use: (amount) => console.log(`${amount} units of ${name} used.`) });
      setName('');
      setQuantity('');
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Supply Name"
        className="p-2 border rounded mr-2"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
        className="p-2 border rounded mr-2"
      />
      <button onClick={handleAddSupply} className="bg-yellow-500 text-black px-4 py-2 rounded">
        Add Supply
      </button>
    </div>
  );
};

export default SupplyForm;
