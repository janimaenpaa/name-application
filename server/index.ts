import express from "express"
import cors from "cors"
import names from "./data/names"
import { sortAlphabetically, sortByPopularity } from "./utils"

const app = express().use(cors())

const PORT = 3001

app.get("/api/names", (_req, res) => {
  console.log("Names")
  const sortedData = sortByPopularity(names)
  res.send(sortedData)
})

app.get("/api/names/alphabetical", (_req, res) => {
  console.log("Alphabetic")
  const sortedData = sortAlphabetically(names)
  res.send(sortedData)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
