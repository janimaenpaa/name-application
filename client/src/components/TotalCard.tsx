import React from "react"
import { Card } from "react-bootstrap"

interface Props {
  total: number | null
}

export const TotalCard: React.FC<Props> = ({ total }) => {
  return <Card style={{ margin: 4, marginTop: 24 }}><h3>{total}</h3></Card>
}
