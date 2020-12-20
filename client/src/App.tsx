import React, { useEffect, useState } from "react"
import { Container as GridContainer } from "react-bootstrap"
import { Container } from "./components/Container"
import { NameGrid } from "./components/NameGrid"
import { NavBar } from "./components/NavBar"
import { SortBar } from "./components/SortBar"
import { Name } from "./types"

const App: React.FC = () => {
  const [names, setNames] = useState<Name[] | null>(null)

  useEffect(() => {
    const fetchNames = () =>
      fetch("http://localhost:3001/api/names")
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setNames(data)
        })
        .catch((error) => console.log(error))

    fetchNames()
  }, [])

  if (!names) return <Container>Loading...</Container>

  return (
    <Container>
      <NavBar />
      <GridContainer>
        <SortBar />
        <NameGrid names={names} />
      </GridContainer>
    </Container>
  )
}

export default App
