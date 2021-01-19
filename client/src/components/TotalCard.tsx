import React from "react"
import { Card } from "react-bootstrap"

interface Props {
  total: number | null
}

export const TotalCard: React.FC<Props> = ({ total }) => {
  return (
    <Card style={{ margin: 4, marginTop: 24 }}>
      <Card.Body style={{ textAlign: "center" }}>
        <h3 style={{ color: "#e43f5a" }}>{total}</h3>
        <h3>names found</h3>
      </Card.Body>
    </Card>
  )
}
