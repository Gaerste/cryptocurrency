import { useEffect } from "react";
import { coins } from "../data/coins.js";
import useSelectCoins from "../hooks/useSelectCoins";
import styled from "styled-components";

const InputSubmit = styled.input`
 width: 100%;
 border: none;
 padding: 10px;
 margin-top: 30px;
 background-color: #708c80;
 color: #fff;
 text-transform: uppercase;
 font-family: "Lato", sans-serif;
 font-weight: 700;
 font-size: 20px;
 border-radius: 5px;
 transform: background-color 0.3s ease;

 &:hover {
  background-color: #5d796d;
  cursor: pointer;
 }
`;

const Form = () => {
 const [coin, SelectCoins] = useSelectCoins("Select your currency", coins);

 return (
  <form>
   <SelectCoins />
   <InputSubmit type='submit' value='quote' />
  </form>
 );
};

export default Form;
