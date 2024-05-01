import React, { useState } from "react";

function PlantCard({ plant, handleSoldOut, handleDelete }) { //'PlantCard component takes 3 props: 'plant'{object representing a plant},'handleSoldOut'{function marking plant as sold out}, 'handleDelete'{function to handle deleting a plant} 
  const { id, name, image, price, soldOut } = plant
  const [isSoldOut, setIsSoldOut] = useState(soldOut) // 'useState' hook to manage state for 'isSoldOut'[boolean to indicate if plant is sold out]
  const [newPrice, setNewPrice] = useState(price) // 'useState' hook to manage state for 'newPrice'[updated price of plant]

  const handleSoldOutClick = () => { // marks a plant as sold out
    setIsSoldOut(true)
    handleSoldOut(id)
  }

  const handlePriceUpdate = () => { //updates price of plant
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ price: newPrice }),
    })
      .then(res => res.json())
      .then((data) => {
        console.log("Price updated:", data)
      })
    }   

   const handleDeleteClick = () => { //deletes a plant
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
     .then(() => {
      console.log("Plant deleted:", id)
      handleDelete(id)
     })
  }

  return (
    <li className="card" data-testid={`plant-item-${id}`}> {/* component renders a card 'li' for each plant: image, name, price, button for 'sold out', button for 'update price', input field for new price, and buton to delete a plant */}
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${newPrice} </p>    
        {isSoldOut ? (
          <button className="primary">Sold Out </button>
        ) : ( 
          <button onClick={handleSoldOutClick} className="primary">In Stock </button>
        )}
        <input type="number" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} placeholder="Enter New Price" />
        <button onClick={handlePriceUpdate} className="update-button">Update Price </button>
        <button onClick={handleDeleteClick} className="delete-button">Delete Plant 🗑️</button>
    </li>
  );
}

export default PlantCard;
