import React from "react"
import styled from "styled-components"

const FactContainer = styled.div`
  margin: 2rem auto;
  width: 310px;
`

const Facts = ({animalFact}) => {
  const { name, facts } = animalFact
  return (
    <FactContainer>
      <h2>{name && name.toUpperCase()}</h2>
      <p>{facts}</p>
    </FactContainer>
  )
}

export default Facts;