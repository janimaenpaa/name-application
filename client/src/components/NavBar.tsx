import React from "react"
import styled from "styled-components"

const Header = styled.h3`
  color: #e43f5a;
  margin: 1rem 1rem 1rem 2rem;
  font-size: 2rem;
`

const Bar = styled.div`
  position: sticky;
  width: 100%;
  height: 6rem;
  background-color: #1b1b2f;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`

interface Props {}

export const NavBar: React.FC<Props> = () => {
  return (
    <Bar>
      <Header>name-application</Header>
    </Bar>
  )
}
