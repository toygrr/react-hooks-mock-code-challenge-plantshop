import React, { useEffect, useState } from "react"
import NewPlantForm from "./NewPlantForm"
import PlantList from "./PlantList"
import Search from "./Search"

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => handleData(data))
  }, [])

  const searchResults = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  )
  function searchState(e) {
    setSearch(e.target.value)
  }
  function handleData(data) {
    setPlants(data)
  }
  function handleSubmit(plantToAdd) {
    setPlants([...plants, plantToAdd])
  }

  return (
    <main>
      <NewPlantForm handleSubmit={handleSubmit} />
      <Search searchState={searchState} />
      <PlantList searchResults={searchResults} />
    </main>
  )
}

export default PlantPage
