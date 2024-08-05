import { useCart } from "@/context/CartContext";
import React, { FC } from "react";
import { Container, StyledHeading, StyledPara } from "./FeaturesProduct.style";

interface FeaturesProductProps {
  features: string;
}

export const FeaturesProduct: FC<FeaturesProductProps> = ({ features }) => {
  return (
    <Container>
      <StyledHeading textLevel="h3">Features</StyledHeading>
      <StyledPara textLevel="p">{features}</StyledPara>
    </Container>
  );
};
