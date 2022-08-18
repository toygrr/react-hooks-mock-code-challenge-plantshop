import React, { useState } from "react"

function NewPlantForm({ handleSubmit }) {
  // Set state as an empty object, representing our new addition to the server
  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: "",
  })

  //handle values from form(values) and put them in the right places within our state object
  function handleOnChange(e) {
    const name = e.target.name
    const value = e.target.value
    setNewPlant({ ...newPlant, [name]: value })
  }

  //why do we need this?
  function handleHandlerHandle(e) {
    e.preventDefault()

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((r) => r.json())
      .then((data) => handleSubmit(data))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleHandlerHandle}>
        <input
          onChange={handleOnChange}
          type="text"
          value={newPlant.name}
          name="name"
          placeholder="Plant name"
        />
        <input
          onChange={handleOnChange}
          type="text"
          value={newPlant.image}
          name="image"
          placeholder="Image URL"
        />
        <input
          onChange={handleOnChange}
          type="number"
          value={newPlant.price}
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  )
}

export default NewPlantForm
