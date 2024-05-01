import React, { useState } from "react"; // imports 'useState' hook from React library

function NewPlantForm({ setPlants}) { // 'NewPlantForm' is the component that takes 'setPlants' as a prop
  const [formData, setFormData] = useState({ name: "", image: "", price: ""}) // use 'useSate' hook to manage the 'formData' with initial; values ({ name, image, price})

  function handleInputChange(e) { 
    const { name, value } = e.target
    setFormData((prevData) => ({...prevData, [name]: value})) // updates the frorm data when inputs change
  }

  function handleSubmit(e) { // 'handleSubmit' is triggered when the form is submitted
    e.preventDefault()
    fetch("http://localhost:6001/plants", {
      method: "POST",       // sends a 'POST' request to the local server with the form data
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData) 
    })
     .then(res => res.json())
     .then((data) => {
        setPlants((prevPlants) => [...prevPlants, data])
        setFormData({ name: "", image: "", price: ""})  // adds new plant to list of plants and resets form data
      })
      .catch((error) => console.error("Error adding plant:", error))
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant 🍃 </h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleInputChange} />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleInputChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleInputChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
