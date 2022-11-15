import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
 display: block;
 color: #fff;
 font-family: "Lato", sans-serif;
 font-size: 24px;
 font-weight: 700;
 margin: 15px 0;
`;

const Select = styled.select`
 width: 100%;
 padding: 10px;
 border-radius: 5px;
 border: none;
`;
const useSelectCoins = (label, options) => {
 const [state, setState] = useState("");

 const SelectCoins = () => (
  <>
   <Label>{label}</Label>
   <Select value={state} onChange={e => setState(e.target.value)}>
    <option value=''>Select</option>
    {options.map((option) => (
     <option value={option.id} key={option.id}>
      {option.name}
     </option>
    ))}
   </Select>
  </>
 );
 return [state, SelectCoins];
};

export default useSelectCoins;