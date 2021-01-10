import React from "react"
import { CardDeck } from "react-bootstrap"
import { Name } from "../types"
import { NameCard } from "./NameCard"

interface Props {
  names: Name[]
}

export const NameGrid: React.FC<Props> = ({ names }) => {
  return (
    <CardDeck style={{ justifyContent: "center", margin: 0 }}>
      {names.map((item, index) => (
        <NameCard key={index} item={item} />
      ))}
    </CardDeck>
  )
}
