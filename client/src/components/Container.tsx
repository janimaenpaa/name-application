import React from "react"
import styled from "styled-components"

interface Props {
  children?: React.ReactNode
}

const StyledContainer = styled.div`
  display: flex;
  background-color: #162447;
  width: 100%;
  height: 100vh;
`

export const Container: React.FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}
