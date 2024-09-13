import React, { Dispatch, SetStateAction } from "react";
import { useCart } from "@/context/CartContext";
import {
  Container,
  Divider,
  ItemWrapper,
  ProductDetailsContainer,
  StyledCustomLink,
  StyledHeading,
  StyledHeadingTotal,
  StyledOverlay,
  StyledPara,
  TotalWrapper,
} from "./CheckoutModal.style";
import useCartTotals from "@/hooks/useCartTotals";
import { SuccessTick } from "@/components/Atoms/SVGs/SuccessTick/SuccessTick";
import { Banner } from "@/components/Atoms/Banner/Banner";
import { CartProductListItem } from "../CartProductListItem/CartProductListItem";
import { formatArray } from "@/helpers/formatArray";

interface CheckoutModalProps {
  setModalOpen:  Dispatch<SetStateAction<boolean>>;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({setModalOpen}) => {
  const { state, clearCart } = useCart();
  const { totalPrice } = useCartTotals();
  const product = state.cart[0];

  const displayText = formatArray(state.cart);
  const handleClick = () => {
    setModalOpen(false)
    clearCart()
  }

  return (
    <>
      <StyledOverlay />
      <Container>
        <SuccessTick width="60" height="60" />
        <StyledHeading textLevel="h3">Thank you for your order</StyledHeading>
        <Banner textLevel="p">
          You will receive an email confirmation shortly
        </Banner>
        <ProductDetailsContainer>
          <ItemWrapper>
            <CartProductListItem product={product} isSummary />
            <Divider />
            <div>{displayText}</div>
          </ItemWrapper>
          <TotalWrapper>
            <StyledHeadingTotal textLevel="h6">Grandtotal</StyledHeadingTotal>
            <StyledPara textLevel="p">
              $ {totalPrice.toLocaleString()}
            </StyledPara>
          </TotalWrapper>
        </ProductDetailsContainer>
        <StyledCustomLink href="/" onClick={handleClick}>
          Back to home
        </StyledCustomLink>
      </Container>
    </>
  );
};
