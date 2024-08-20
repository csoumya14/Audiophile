import React, { Dispatch, SetStateAction, useRef } from "react";
import { useCart } from "@/context/CartContext";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { Container, StyledCustomLink, StyledOverlay } from "./CartModal.style";
import { CartProductList } from "../CartProductList/CartProductList";
import { CartModalHeadingRemoveButton } from "../CartModalHeadingRemoveButton/CartModalHeadingRemoveButton";
import { CartTotalAmount } from "../CartTotalAmount/CartTotalAmount";
import { Banner } from "@/components/Atoms/Banner/Banner";
import { Cart } from "@/components/Atoms/SVGs/Cart/Cart";
import { Modak } from "next/font/google";
import { ModalEmptyCartContent } from "../ModalEmptyCartContent/ModalEmptyCartContent";

interface CartModalProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const CartModal: React.FC<CartModalProps> = ({ setModalOpen }) => {
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => setModalOpen(false));
  const { state, clearCart } = useCart();
  const handleClick = () => {
    setModalOpen(false);
    clearCart();
  };

  return (
    <>
      <StyledOverlay />
      <Container ref={node}>
        {state.cart.length > 0 ? (
          <>
            <CartModalHeadingRemoveButton />
            <CartProductList />
            <CartTotalAmount />
            <StyledCustomLink
              onClick={() => setModalOpen(false)}
              href={`/checkout`}
            >
              Checkout
            </StyledCustomLink>
          </>
        ) : (
          <ModalEmptyCartContent />
        )}
      </Container>
    </>
  );
};
