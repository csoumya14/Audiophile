"use client";
import { FC } from "react";
import {
  QuantityContainer,
  StyledButton
} from "./QuantityAddRemoveButton.style";

interface QuantityAddRemoveButtonProps {
  decreaseQuantity: () => void;
  increaseQuantity: () => void;
  quantity: number;
}

export const QuantityAddRemoveButton: FC<QuantityAddRemoveButtonProps> = ({
  decreaseQuantity,
  increaseQuantity,
  quantity,
}) => {
  return (
    <QuantityContainer>
      <StyledButton type="button" onClick={decreaseQuantity}>
        -
      </StyledButton>
      {quantity}
      <StyledButton onClick={increaseQuantity} type="button">
        +
      </StyledButton>
    </QuantityContainer>
  );
};
