import React, { Dispatch, SetStateAction, useRef } from "react";
import { useCart } from "@/context/CartContext";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import {
  Container,
  StyledCheckoutButton,
  StyledHeading,
  StyledOverlay,
  StyledRemoveButton,
  Wrapper,
} from "./CartModal.style";
import { CartProductList } from "../CartProductList/CartProductList";
import { CartModalHeadingRemoveButton } from "../CartModalHeadingRemoveButton/CartModalHeadingRemoveButton";
import { CartTotalAmount } from "../CartTotalAmount/CartTotalAmount";

interface CartModalProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const CartModal: React.FC<CartModalProps> = ({ setModalOpen }) => {
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => setModalOpen(false));

  return (
    <>
      <StyledOverlay />
      <Container ref={node}>
        <CartModalHeadingRemoveButton />
        <CartProductList />
        <CartTotalAmount />
        <StyledCheckoutButton type="button">Checkout</StyledCheckoutButton>
      </Container>
    </>
  );
};
