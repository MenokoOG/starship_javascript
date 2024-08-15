import React, { createContext, useState, useContext } from 'react';

const StarshipContext = createContext();

export const useStarship = () => useContext(StarshipContext);

export const StarshipProvider = ({ children }) => {
  const [starship, setStarship] = useState(null);
  const [supplies, setSupplies] = useState([]);
  const [crew, setCrew] = useState([]);
  const [shuttles, setShuttles] = useState([]);

  const addSupply = (supply) => setSupplies([...supplies, supply]);
  const addCrewMember = (crewMember) => setCrew([...crew, crewMember]);
  const addShuttle = (shuttle) => setShuttles([...shuttles, shuttle]);

  const startMission = () => {
    supplies.forEach((supply) => supply.use(5));
    crew.forEach((crewMember) => crewMember.performTask("working on the navigation system"));
    shuttles.forEach((shuttle) => shuttle.launch());
  };

  return (
    <StarshipContext.Provider value={{
      starship,
      setStarship,
      supplies,
      addSupply,
      crew,
      addCrewMember,
      shuttles,
      addShuttle,
      startMission
    }}>
      {children}
    </StarshipContext.Provider>
  );
};
