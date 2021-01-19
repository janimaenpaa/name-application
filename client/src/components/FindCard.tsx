import React, { useState } from "react"
import { Button, Card, FormControl, InputGroup } from "react-bootstrap"
import { Name } from "../types"

interface Props {}

export const FindCard: React.FC<Props> = () => {
  const [name, setName] = useState<string | null>(null)
  const [data, setData] = useState<Name | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (event: any) => {
    event.preventDefault()

    fetch("http://localhost:3001/api/names", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        if (response.error) {
          setData(null)
          setError(response.error)
        } else {
          setError(null)
          setData(response)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Card style={{ margin: 4, marginTop: 24 }}>
      <Card.Body>
        <h3>Find A Name</h3>
        <form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Name..."
              onChange={(event) => setName(event.target.value)}
            />
            <InputGroup.Append>
              <Button type="submit" variant="outline-secondary">
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </form>
        {data && (
          <div className="d-flex flex-column justify-content-center align-items-center m-2 p-4">
            <h3 style={{ color: "#e43f5a", fontWeight: 700 }}>{data.name}</h3>
            <h4>{data.amount} names</h4>
          </div>
        )}
        {error && (
          <div className="d-flex justify-content-center align-items-center m-2 p-4">
            {error}
          </div>
        )}
      </Card.Body>
    </Card>
  )
}
