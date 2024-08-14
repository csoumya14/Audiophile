import React from "react";
import { Banner } from "@/components/Atoms/Banner/Banner";
import { Cart } from "@/components/Atoms/SVGs/Cart/Cart";
import { Container, StyledHeading } from "./ModalEmptyCartContent.style";

interface ModalEmptyCartContentProps {}

export const ModalEmptyCartContent: React.FC<
  ModalEmptyCartContentProps
> = () => {
  return (
    <Container>
      <StyledHeading textLevel={"h5"}>Your cart is empty</StyledHeading>
      <Cart color="#000" width="100" height="100" />
    </Container>
  );
};
