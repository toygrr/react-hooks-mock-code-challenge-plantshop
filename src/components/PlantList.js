import React from "react"
import PlantCard from "./PlantCard"

function PlantList({ searchResults }) {
  return (
    <ul className="cards">
      {searchResults.map((plant) => {
        return (
          <PlantCard
            key={plant.id}
            name={plant.name}
            image={plant.image}
            price={plant.price}
          />
        )
      })}
    </ul>
  )
}

export default PlantList
