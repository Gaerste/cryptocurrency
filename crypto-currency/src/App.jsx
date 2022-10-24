import React from "react";
import styled from "styled-components";
import Form from "./components/Form";

import ImgCryptos from "./img/img-cryptos.png";

const Container = styled.div`
 width: 90%;
 max-width: 900px;
 margin: 0 auto;
 @media (min-width: 992px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
 }
`;

const Image = styled.img`
 max-width: 400px;
 width: 80%;
 margin: 100px auto 0 auto;
 display: block;
`;

const Heading = styled.h1`
 font-family: "Lato", sans-serif;
 color: white;
 text-align: center;
 margin-top: 80px;
 margin-bottom: 50px;
 font-weight: 700;
 font-size: 34px;

 &::after {
  content: "";
  width: 100px;
  height: 6px;
  background-color: #a9e5bb;
  display: block;
  margin: 10px auto 0 auto;
 }
`;

const App = () => {
 return (
  <Container>
   <Image src={ImgCryptos} />
   <div>
    <Heading>Instant Cryptocurrency exchange</Heading>
    <Form />
   </div>
  </Container>
 );
};

export default App;
