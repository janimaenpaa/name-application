import React from "react"
import { CardDeck, Container } from "react-bootstrap"
import { Name } from "../types"
import { NameCard } from "./NameCard"

interface Props {
  names: Name[]
}

export const NameGrid: React.FC<Props> = ({ names }) => {
  return (
    <Container>
      <CardDeck style={{ justifyContent: "center" }}>
        {names.map((item, index) => (
          <NameCard key={index} item={item} />
        ))}
      </CardDeck>
    </Container>
  )
}
