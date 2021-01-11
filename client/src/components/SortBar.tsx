import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Bar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: #1b1b2f;
  color: #fff;
  padding: 10px 10px 10px 10px;
  margin: 10px 0px 10px 0px;
  border-radius: 16px;

  @media (max-width: 380px) {
    flex-direction: column;
  }
`

const Button = styled.button`
  margin-right: 1rem;
  font-weight: 600;
  background-color: #1b1b2f;
  height: 100%;
  border: none;
  border-radius: 10px;
  color: #fff;
  text-align: center;
  padding: 8px;

  &:hover {
    background-color: #e43f5a;
  }
`

const StyledLink = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
  }
`

interface Props {
  fetchNamesByPopularity: () => Promise<void>
  fetchNamesByAlphabeticalOrder: () => Promise<void>
}

export const SortBar: React.FC<Props> = ({
  fetchNamesByPopularity,
  fetchNamesByAlphabeticalOrder,
}) => {
  return (
    <Bar>
      <Button onClick={fetchNamesByPopularity}>
        <StyledLink>
          <Link to="/">Largest</Link>
        </StyledLink>
      </Button>
      <Button onClick={fetchNamesByAlphabeticalOrder}>
        <StyledLink>
          <Link to="/">Alphabetical</Link>
        </StyledLink>
      </Button>
      <Button>
        <StyledLink>
          <Link to="/total">Total</Link>
        </StyledLink>
      </Button>
      <Button>
        <StyledLink><Link to="/find">Find</Link></StyledLink>
      </Button>
    </Bar>
  )
}
