import React from "react"
import styled from "styled-components"
import { Card } from "react-bootstrap"
import { Name } from "../types"

const NameHeader = styled.span`
  color: #e43f5a;
  font-weight: 700;
  font-size: 2rem;
`

interface Props {
  item: Name
}

export const NameCard: React.FC<Props> = ({ item }) => {
  return (
    <Card
      style={{
        flex: 1,
        minWidth: "30%",
        maxWidth: "100%",
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card.Body>
        <Card.Text style={{ textAlign: "center" }}>{item.amount}</Card.Text>
        <Card.Text>
          <NameHeader>{item.name}</NameHeader>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
