import React from "react"
import styled from "styled-components"
import { Card } from "react-bootstrap"
import { Name } from "../types"

const NameHeader = styled.h4`
  color: #e43f5a;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

interface Props {
  item: Name
}

export const NameCard: React.FC<Props> = ({ item }) => {
  return (
    <Card
      style={{
        flex: 1,
        minWidth: "23%",
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card.Body>
        <Card.Text>
          <NameHeader>{item.name}</NameHeader>
        </Card.Text>
        <Card.Text style={{ textAlign: "center" }}>
          {item.amount} names
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
