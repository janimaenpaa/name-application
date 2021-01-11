import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Container as GridContainer } from "react-bootstrap"
import { Container } from "./components/Container"
import { NameGrid } from "./components/NameGrid"
import { NavBar } from "./components/NavBar"
import { SortBar } from "./components/SortBar"
import { Name } from "./types"

const App: React.FC = () => {
  const [names, setNames] = useState<Name[] | null>(null)

  useEffect(() => {
    fetchNamesByPopularity()
  }, [])

  const fetchNamesByPopularity = () =>
    fetch("http://localhost:3001/api/names")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setNames(data)
      })
      .catch((error) => console.log(error))

  const fetchNamesByAlphabeticalOrder = () =>
    fetch("http://localhost:3001/api/names/alphabetical")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setNames(data)
      })
      .catch((error) => console.log(error))

  if (!names) return <Container>Loading...</Container>

  return (
    <Router>
      <Container>
        <NavBar />
        <GridContainer>
          <SortBar
            fetchNamesByPopularity={fetchNamesByPopularity}
            fetchNamesByAlphabeticalOrder={fetchNamesByAlphabeticalOrder}
          />
          <Switch>
            <Route exact path="/" render={() => <NameGrid names={names} />} />
          </Switch>
        </GridContainer>
      </Container>
    </Router>
  )
}

export default App
