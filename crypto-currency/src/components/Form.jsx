import React from 'react'
import styled from 'styled-components'

const InputSubmit = styled.input`
    width: 100%;
    border: none;
    padding: 10px;
    background-color: #708C80;
    color: #fff;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 20px;
    border-radius: 5px;
    transform: background-color .3s ease;

    &:hover {
        background-color: #5d796d;
        cursor: pointer;
    }
`

const Form = () => {
  return (
    <form>
        <InputSubmit type="submit" value="quote"/>
    </form>
  )
}

export default Form