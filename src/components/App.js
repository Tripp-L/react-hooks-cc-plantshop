import React, { useState, useEffect } from "react"; // Reach hooks to set state and effect variables.
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]) // hook to manage 2 state variables: 'plants' an [array],
  const [searchTerm, setSearchTerm] = useState("") // and 'searchTerm' a "string"

  useEffect(() => { // hook to perform side effects for components
    fetch("http://localhost:6001/plants") 
     .then(res => res.json())
     .then((data) => setPlants(data))
  }, []) // when data is fetched when the component mounts: [] array runs once when mounted

  return ( //renders JSX, including 'Header' and 'PlantPage' (child) components, and those pass the necessary props to each of them. 'Header'- comp, 'setSearchTerm' prop, etc...
    <div className="app"> 
      <Header setSearchTerm={setSearchTerm} />
      <PlantPage plants={plants} searchTerm={searchTerm} setPlants={setPlants} setSearchTerm={setSearchTerm} /> 
    </div>
  );
}

export default App;
