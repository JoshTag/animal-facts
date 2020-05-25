import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Select from "./../Select/Select"
import data from "../../../data/data.js"

const ControlContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

const Button = styled.button`
  width: 100px;
  border: 1px solid black;
  border-radius: 3px;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`

const Controls = ({ changeShapes, randomAnimal }) => {
  const [isCycling, setIsCycling] = useState(false)
  const dataArr = Object.entries(data)

  useEffect(() => {
    let interval = null
    if (isCycling) {
      interval = setInterval(() => {
        randomAnimal(dataArr)
      }, 4000)
    } else if (!isCycling) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isCycling, changeShapes, randomAnimal, dataArr])

  // Start and stop cycle
  const startCycle = () => {
    randomAnimal(dataArr)
    setIsCycling(true)
  }
  const stopCycle = () => setIsCycling(false)

  return (
    <ControlContainer>
      <Button onClick={isCycling ? stopCycle : startCycle}>
        {isCycling ? "Stop" : "Start"}
      </Button>
      <Button
        onClick={() => {
          stopCycle()
          randomAnimal(dataArr)
        }}
      >
        Next
      </Button>
      <Select stopCycle={stopCycle} changeShapes={changeShapes} />
    </ControlContainer>
  )
}

export default Controls
