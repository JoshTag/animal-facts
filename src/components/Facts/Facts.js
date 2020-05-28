import React from "react"
import styled from "styled-components"
import device from "./../../styles/device"

const FactContainer = styled.div`
  margin: 2rem auto;
  width: 310px;
  height: 200px;
  @media ${device.tablet} {
    width: 500px;
    margin: 1rem auto;
  }
`

const AnimalName = styled.h1`
  text-align: center;
  @media ${device.tablet} {
    margin-bottom: .5rem;
  }
`

const AnimalFact = styled.p``

const Facts = ({ animalFact }) => {
  const { name, facts } = animalFact
  return (
    <FactContainer>
      <AnimalName>{name && name.toUpperCase()}</AnimalName>
      <AnimalFact>{facts}</AnimalFact>
    </FactContainer>
  )
}

export default Facts
