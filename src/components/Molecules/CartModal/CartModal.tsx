import React, { Dispatch, SetStateAction, useRef } from "react";
import { useCart } from "@/context/CartContext";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { Container, StyledCustomLink, StyledOverlay } from "./CartModal.style";
import { CartProductList } from "../CartProductList/CartProductList";
import { CartModalHeadingRemoveButton } from "../CartModalHeadingRemoveButton/CartModalHeadingRemoveButton";
import { Amount } from "../Amount/Amount";
import { ModalEmptyCartContent } from "../ModalEmptyCartContent/ModalEmptyCartContent";
import useCartTotals from "@/hooks/useCartTotals";

interface CartModalProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const CartModal: React.FC<CartModalProps> = ({ setModalOpen }) => {
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => setModalOpen(false));
  const { state } = useCart();
  const { totalPrice } = useCartTotals();

  return (
    <>
      <StyledOverlay />
      <Container ref={node}>
        {state.cart.length > 0 ? (
          <>
            <CartModalHeadingRemoveButton />
            <CartProductList />
            <Amount value={totalPrice} text="Total" />
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
