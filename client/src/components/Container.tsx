import React from "react"
import styled from "styled-components"

interface Props {
  children?: React.ReactNode
}

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const Container: React.FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}
