import React from "react";
import { useCart } from "@/context/CartContext";

import { StyledPara, StyledParaAmount, Wrapper } from "./CartTotalAmount.style";

interface CartTotalAmountProps {}

export const CartTotalAmount: React.FC<CartTotalAmountProps> = () => {
  const { calculatedTotalPrice } = useCart();
  const totalPrice = calculatedTotalPrice();
  console.log(totalPrice);
  return (
    <Wrapper>
      <StyledPara textLevel="p">Total </StyledPara>
      <StyledParaAmount textLevel="p"> $ {totalPrice.toLocaleString()}</StyledParaAmount>
    </Wrapper>
  );
};
