import express from "express"
import names from "./data/names"
import { sortByPopularity } from "./utils"

const app = express()

const PORT = 3001

app.get("/api/names", (_req, res) => {
  const sortedData = sortByPopularity(names)
  res.send(sortedData)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
