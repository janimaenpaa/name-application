import React, { useEffect, useState } from "react"
import { Card } from "./components/Card"
import { Container } from "./components/Container"
import { NavBar } from "./components/NavBar"
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
      {names.map((item, index) => (
        <Card key={index}>{item.name}</Card>
      ))}
    </Container>
  )
}

export default App
