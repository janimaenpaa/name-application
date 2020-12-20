import React from "react"
import styled from "styled-components"

const Bar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 3rem;
  background-color: #1b1b2f;
  color: #fff;
  padding: 10px 10px 10px 10px;
  margin: 10px 0px 10px 0px;
  border-radius: 16px;
`

const Button = styled.button`
  margin-right: 1rem;
  font-weight: 600;
  background-color: #1b1b2f;
  height: 3rem;
  border: none;
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    background-color: #e43f5a;
  }
`

interface Props {}

export const SortBar: React.FC<Props> = () => {
  return (
    <Bar>
      <Button>Largest</Button>
      <Button>Alphabetical</Button>
      <Button>Total</Button>
      <Button>Find</Button>
    </Bar>
  )
}
