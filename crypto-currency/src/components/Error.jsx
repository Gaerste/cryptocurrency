import styled from "@emotion/styled"

const Text = styled.div`
    background-color: #b7322c;
    color: #fff;
    font-size: 22px;
    font-family: 'Lato', sans-serif;
    padding: 15px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
`

const Error = ({children}) => {
  return (
    <Text>{children}</Text>
  )
}

export default Error