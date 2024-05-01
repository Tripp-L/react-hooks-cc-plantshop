import React from "react";
import PlantCard from "./PlantCard"; // imports 'PlantCard' from local file

function PlantList({ plants, searchTerm, handleSoldOut, handleDelete }) { // takes 4 props: 'plant'[array of plant objects], 'searchTerm'(string for filtering plants by name), 'handleSoldOut'(function to handle marking plant as sold out), and 'handleDelete'(function to handle deleting a plant)
  const filterPlants = plants.filter((plant) => // filters 'plants' array based on the 'serachTerm' using 'filter' metod to create 'filterPlants' array of filtered plants
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <ul className="cards"> {/* renders a list 'ul' of 'PlantCard' components for each filtered plant using 'map' */}
      {filterPlants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} handleSoldOut={handleSoldOut} handleDelete={handleDelete}/>
      ))} 
      </ul>
  );
}

export default PlantList;
