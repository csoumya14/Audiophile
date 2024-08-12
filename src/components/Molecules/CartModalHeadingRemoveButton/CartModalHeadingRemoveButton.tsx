import React from "react";
import { useCart } from "@/context/CartContext";

import {
  StyledHeading,
  StyledRemoveButton,
  Wrapper,
} from "./CartModalHeadingRemoveButton.style";

interface CartModalHeadingRemoveButtonProps {}

export const CartModalHeadingRemoveButton: React.FC<
  CartModalHeadingRemoveButtonProps
> = () => {
  const { state, clearCart } = useCart();

  return (
    <Wrapper>
      <StyledHeading textLevel="h5">Cart({state.cart.length}) </StyledHeading>
      <StyledRemoveButton type="button" onClick={clearCart}>
        Remove all
      </StyledRemoveButton>
    </Wrapper>
  );
};
