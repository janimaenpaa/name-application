import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Container as GridContainer } from "react-bootstrap"
import { Container } from "./components/Container"
import { NameGrid } from "./components/NameGrid"
import { NavBar } from "./components/NavBar"
import { SortBar } from "./components/SortBar"
import { Name } from "./types"
import { TotalCard } from "./components/TotalCard"
import { FindCard } from "./components/FindCard"

const App: React.FC = () => {
  const [name, setName] = useState<string | null>(null)
  const [names, setNames] = useState<Name[] | null>(null)
  const [total, setTotal] = useState<number | null>(null)

  useEffect(() => {
    fetchNamesByPopularity()
    getTotalNames()
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

  const getTotalNames = () =>
    fetch("http://localhost:3001/api/names/total")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setTotal(data.total)
      })
      .catch((error) => console.log(error))

  const findName = () =>
    fetch("http://localhost:3001/api/names", {
      method: "POST",
      body: JSON.stringify({ name }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error))

  const handleNameChange = (event: any) => {
    setName(event.target.name)
  }

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
            <Route path="/total" render={() => <TotalCard total={total} />} />
            <Route
              path="/find"
              render={() => <FindCard handleChange={handleNameChange} />}
            />
          </Switch>
        </GridContainer>
      </Container>
    </Router>
  )
}

export default App
