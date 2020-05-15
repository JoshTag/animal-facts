import React, { useEffect, useState } from "react"
import styled from "styled-components"
import data from "../../../data/data.js"

const Controls = ({ changeShapes }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        const randomAnimal = data[Math.floor(Math.random() * data.length)]
        for (let [key, value] of Object.entries(randomAnimal)) {
          changeShapes(value, key)
        }
      }, 5000);
    } else if (!isPlaying) {
      clearInterval(interval);
    }
    return () => clearInterval(interval)
  }, [isPlaying, changeShapes])

  const startCycle = () => setIsPlaying(true)
  const stopCycle = () => setIsPlaying(false)

  const selectAnimals = animal => {
    for (let [key, value] of Object.entries(animal)) {
      return (
        <button key={key} onClick={() => changeShapes(value, key)}>
          {key}
        </button>
      )
    }
  } 

  return (
    <>
      {data.map(animal => {
        return selectAnimals(animal)
      })}
      <button onClick={startCycle}>Cycle</button>
      <button onClick={stopCycle}>Pause Cycle</button>
    </>
  )
}

export default Controls
