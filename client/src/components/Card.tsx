import React from "react"
import styled from "styled-components"

const Container = styled.div`
  flex: 1;
  background-color: #fff;
  margin: 10px 10px 10px 10px;
  padding: 10px 10px 10px 10px;
  border-radius: 10px;
  width: 100px;
  height: 100px;
`

interface Props {
  children?: React.ReactNode
}

export const Card: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>
}
