import React, { useEffect, useState } from "react"
import anime from "animejs"
import axios from "axios"
import Layout from "./../components/Layout/Layout"
import Animals from "./../components/Animals/Animals"
import Facts from "./../components/Facts/Facts"
import Controls from "./../components/Controls/Controls"
import themes from "./../styles/themes"

const pingURL = process.env.REACT_APP_BACKEND_SERVER || "http://localhost:5000";

const IndexPage = () => {
  const [animalFact, setAnimalFact] = useState({})
  const [colour, setColour] = useState(`#e4e4e4`)

  useEffect(() => {
    axios.get(`${pingURL}/api/ping`).catch(err => alert(err))
  })

  // GET animal fact
  const getFact = async animal => {
    try {
      const res = await axios.get(`${pingURL}/api/facts/${animal}?random=true`)
      const data = await res.data.data
      setAnimalFact(data)
      changeColour(data.name)
    } catch (err) {
      alert(err)
    }
  }

  // Set colour theme based on animal
  const changeColour = animal => {
    const animalColour = Object.keys(themes).find(item => {
      return item === animal
    })
    setColour(themes[animalColour])
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
      const randomNumber = Math.random() * (1200 - 400) + 400
      timeline.add(
        {
          targets: path.id,
          d: {
            value: path.d,
            duration: randomNumber,
            easing: "easeInOutQuad",
          },
          fill: {
            value: path.fill,
            duration: randomNumber,
            easing: "easeInOutQuad",
          },
        },
        Math.random() * (30 - 20) + 20 * index,
        "easeOutCirc"
      )
    })
  }

  // Gets a random animal fact
  const randomAnimal = arr => {
    const random = arr[Math.floor(Math.random() * arr.length)]
    const animal = random[0]
    const path = random[1]
    changeShapes(path, animal)
  }

  return (
    <Layout colour={colour}>
      <Animals />
      <Facts animalFact={animalFact} />
      <Controls changeShapes={changeShapes} randomAnimal={randomAnimal} />
    </Layout>
  )
}
export default IndexPage
