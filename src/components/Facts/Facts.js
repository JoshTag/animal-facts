import React from "react"
import styled from "styled-components"

const FactContainer = styled.div`
  margin: 2rem auto;
  width: 310px;
  height: 200px;
`

const AnimalName = styled.h1`
  text-align: center;
`

const AnimalFact = styled.p`

`

const Facts = ({animalFact}) => {
  const { name, facts } = animalFact
  return (
    <FactContainer>
      <AnimalName>{name && name.toUpperCase()}</AnimalName>
      <AnimalFact>{facts}</AnimalFact>
    </FactContainer>
  )
}

export default Facts