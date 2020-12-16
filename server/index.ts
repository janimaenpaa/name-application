import express from "express"

const app = express()

const PORT = 3001

app.get("/api/ping", (_req, res) => {
  console.log("PING PONG")
  res.send("pong")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
