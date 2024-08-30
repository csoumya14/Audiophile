import React from "react";
import { StyledPara, StyledParaAmount, Wrapper } from "./Amount.style";

interface AmountProps {
  value: number;
  text: string;
  isHighlighted?: boolean;
}

export const Amount: React.FC<AmountProps> = ({ value, text,isHighlighted }) => {
  return (
    <Wrapper>
      <StyledPara textLevel="p" isHighlighted={isHighlighted}>{text} </StyledPara>
      <StyledParaAmount textLevel="p" isHighlighted={isHighlighted}>
        {" "}
        $ {value.toLocaleString()}
      </StyledParaAmount>
    </Wrapper>
  );
};
