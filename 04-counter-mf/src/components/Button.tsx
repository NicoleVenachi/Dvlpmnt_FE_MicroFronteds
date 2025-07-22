import React from 'react'
import styled from '@emotion/styled'

const ButtonStyled = styled.button`
  background-color: #007bff;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-size: 1.3rem;
  margin: 0px .5rem;
  padding: 0.5rem 1rem;
`
const Button = ({ text, onClick }: { text: string, onClick: () => void }) => {
  return (
    <ButtonStyled onClick={onClick} >
      {text}
    </ButtonStyled>
  )
}

export default Button
