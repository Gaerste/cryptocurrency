import { useEffect, useState } from "react";
import { coins } from "../data/coins.js";
import useSelectCoins from "../hooks/useSelectCoins";
import styled from "styled-components";
import Error from "./Error.jsx";

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

const Form = ({setCoins}) => {
 const [cryptos, setCryptos] = useState([]);
 const [error, setError] = useState(false);

 const [coin, SelectCoins] = useSelectCoins("Select your currency", coins);
 const [crypto, SelectCrypto] = useSelectCoins("Select your crypto", cryptos);

 useEffect(() => {
  const consultAPI = async () => {
   const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
   const request = await fetch(url);
   const response = await request.json();

   const arrayCryptos = response.Data.map((crypto) => {
    const objCryptos = {
     id: crypto.CoinInfo.Name,
     name: crypto.CoinInfo.FullName,
    };
    return objCryptos;
   });
   setCryptos(arrayCryptos);
  };
  consultAPI();
 }, []);

 const handleSubmit = (e) => {
  e.preventDefault();
  if ([coin, crypto].includes("")) {
   setError(true);
   return;
  }
  setError(false);
  setCoins({
    coin,
    crypto
  })
 };
 return (
  <>
   {error && <Error>All fields are required</Error>}
   <form onSubmit={handleSubmit}>
    <SelectCoins />
    <SelectCrypto />
    <InputSubmit type='submit' value='quote' />
   </form>
  </>
 );
};

export default Form;
