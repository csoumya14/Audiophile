import React, { Dispatch, SetStateAction, useRef } from "react";
import { useCart } from "@/context/CartContext";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import {
  Container,
  StyledCustomLink,
  StyledHeading,
  StyledOverlay,
} from "./CheckoutModal.style";

import useCartTotals from "@/hooks/useCartTotals";
import { SuccessTick } from "@/components/Atoms/SVGs/SuccessTick/SuccessTick";
import { Banner } from "@/components/Atoms/Banner/Banner";
import { CartProductListItem } from "../CartProductListItem/CartProductListItem";
import { CartItem } from "@/types/products";

interface CheckoutModalProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  setModalOpen,
}) => {
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => setModalOpen(false));
  const { state } = useCart();
  const { totalPrice } = useCartTotals();
  const product = state.cart[0];

  const formatArray = (items: CartItem[]) => {
    if (items.length === 0 || items.length === 1) return "";

    const remainingCount = items.length - 1;

    if (remainingCount > 0) {
      return ` and ${remainingCount} other item(s)`;
    }
  };

  return (
    <>
      <StyledOverlay />
      <Container ref={node}>
        <SuccessTick width="60" height="60" />
        <StyledHeading textLevel="h3">Thank you for your order</StyledHeading>
        <Banner textLevel="p">
          You will receive an email confirmation shortly
        </Banner>
        <CartProductListItem product={product} isSummary />
      </Container>
    </>
  );
};
