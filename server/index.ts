import express from "express"
import cors from "cors"
import names from "./data/names"
import { getTotal, sortAlphabetically, sortByPopularity } from "./utils"

const app = express().use(cors())

const PORT = 3001

app.get("/api/names", (_req, res) => {
  console.log("Most popular")
  const sortedData = sortByPopularity(names)
  res.send(sortedData)
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
