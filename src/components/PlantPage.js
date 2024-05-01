import React from "react";
import NewPlantForm from "./NewPlantForm"; // imported form local file
import PlantList from "./PlantList"; // imported from local file

function PlantPage({ plants, searchTerm, setPlants }) { // takes 3 props: 'plants'[array of plant objects], 'searchTerm'(string for filtering plants by name), and 'setPlants'(function to update list of plants)
  const handleSoldOut = (plantId) => { //defines 2 functions: 'handleSoldOut' to log when plant is makred sold out
    console.log(`Mark plant ${plantId} as sold out`) 
  }

  const handleDelete = (id) => { // and 'handleDelete' to update list of plants by removing a plant by it's ID
    setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== id))
  }

  return ( // this renders JSX for 'NewPlantForm' component for adding new plants, and 'PlantList' for displaying list of plants with search function including option to mark plant as 'sold out' or to 'delete'
    <main>
      <NewPlantForm setPlants={setPlants} /> 
      <PlantList plants={plants} searchTerm={searchTerm} handleSoldOut={handleSoldOut} handleDelete={handleDelete} />
    </main>
  );
}

export default PlantPage;
