import React, { useEffect, useState } from "react"
import anime from "animejs"
import styled from "styled-components"
import axios from "axios"
import Layout from "./../components/Layout/Layout"
import Animals from "./../components/Animals/Animals"
import Facts from "./../components/Facts/Facts"
import Controls from "./../components/Controls/Controls"
import data from "./../../data/data.js"

const Header = styled.h1`
  text-align: center;
  padding: 2.5rem 0;
  margin: 0;
`

const IndexPage = () => {
  const [animalFact, setAnimalFact] = useState({})

  // GET animal fact
  const getFact = async animal => {
    await axios
      .get(`http://localhost:5000/api/facts/${animal}?random=true`)
      .then(res => {
        setAnimalFact(res.data.data)
      })
      .catch(err => alert(err))
  }

  // GET animal and changes SVG path
  const changeShapes = (shape, animal) => {
    getFact(animal)

    let timeline = anime.timeline({
      autoplay: true,
      direction: "alternate",
      loop: false,
    })

    shape.forEach((path, index) => {
      timeline.add(
        {
          targets: path.id,
          d: {
            value: path.d,
            duration: 500,
            easing: "easeInOutQuad",
          },
          fill: {
            value: path.fill,
            duration: 500,
            easing: "easeInOutQuad",
          },
        },
        10 * index
      )
    })
  }

  return (
    <Layout>
      <Header>ANIMAL FACTS</Header>
      <Animals />
      <Facts animalFact={animalFact} />
      <Controls changeShapes={changeShapes} />
    </Layout>
  )
}
export default IndexPage
