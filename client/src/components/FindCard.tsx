import React from "react"
import { Button, Card, FormControl, InputGroup } from "react-bootstrap"

interface Props {
  handleChange: (event: any) => void
}

export const FindCard: React.FC<Props> = ({ handleChange }) => {
  return (
    <Card style={{ margin: 4, marginTop: 24 }}>
      <Card.Body>
        <h3>Find A Name</h3>
        <InputGroup className="mb-3">
          <FormControl placeholder="Name..." onChange={handleChange} />
          <InputGroup.Append>
            <Button variant="outline-secondary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </Card.Body>
    </Card>
  )
}
