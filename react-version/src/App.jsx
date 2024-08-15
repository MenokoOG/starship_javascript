import React from 'react';
import { StarshipProvider } from './context/StarshipContext';
import StarshipForm from './components/StarshipForm';
import CrewForm from './components/CrewForm';
import SupplyForm from './components/SupplyForm';
import StarshipStatus from './components/StarshipStatus';

const App = () => {
  return (
    <StarshipProvider>
      <div className="container mx-auto text-center p-6 bg-gray-900 text-white">
        <h1 className="text-3xl font-bold text-yellow-500 mb-6">Starship Simulator</h1>
        <StarshipForm />
        <CrewForm />
        <SupplyForm />
        <StarshipStatus />
      </div>
    </StarshipProvider>
  );
};

export default App;
