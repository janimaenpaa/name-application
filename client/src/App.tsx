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
  const [names, setNames] = useState<Name[] | null>(null)
  const [total, setTotal] = useState<number | null>(null)

  useEffect(() => {
    fetchNamesByPopularity()
    getTotalNames()
  }, [])

  const fetchNamesByPopularity = () =>
    fetch("/api/names")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setNames(data)
      })
      .catch((error) => console.log(error))

  const fetchNamesByAlphabeticalOrder = () =>
    fetch("/api/names/alphabetical")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setNames(data)
      })
      .catch((error) => console.log(error))

  const getTotalNames = () =>
    fetch("/api/names/total")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setTotal(data.total)
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
            <Route path="/total" render={() => <TotalCard total={total} />} />
            <Route path="/find" render={() => <FindCard />} />
          </Switch>
        </GridContainer>
      </Container>
    </Router>
  )
}

export default App
