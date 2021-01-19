import express, { json } from "express"
import cors from "cors"
import names from "./data/names"
import {
  findByName,
  getTotal,
  sortAlphabetically,
  sortByPopularity,
} from "./utils"

const app = express()
app.use(cors())
app.use(json())
app.use(express.static('client/build'))

const PORT = 3001

app.get("/api/names", (_req, res) => {
  console.log("Most popular")
  const sortedData = sortByPopularity(names)
  res.send(sortedData)
})

app.post("/api/names", (req, res) => {
  const nameToFind = req.body.name
  console.log(nameToFind)
  const name = findByName(names, nameToFind)

  if (!name) {
    return res.status(404).send({ error: "Name not found" })
  }

  return res.send(name)
})

app.get("/api/names/alphabetical", (_req, res) => {
  console.log("Alphabetical")
  const sortedData = sortAlphabetically(names)
  res.send(sortedData)
})

app.get("/api/names/total", (_req, res) => {
  console.log("Total")
  const total = getTotal(names)
  res.send({ total: total })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
