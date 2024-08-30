import { FC } from "react";
import { CartProductList } from "../CartProductList/CartProductList";
import { Amount } from "../Amount/Amount";
import {
  AmountWrapper,
  Container,
  StyledHeading,
} from "./CheckoutSummary.style";
import useCartTotals from "@/hooks/useCartTotals";

interface CheckoutSummaryProps {}
export const CheckoutSummary: FC<CheckoutSummaryProps> = () => {
  const { totalPrice, tax, grandTotal } = useCartTotals();
  return (
    <Container>
      <StyledHeading textLevel="h5">Summary</StyledHeading>
      <CartProductList isSummary />
      <AmountWrapper>
        {" "}
        <Amount value={totalPrice} text="total" />
        <Amount value={50} text="Shipping"/> 
        <Amount value={tax} text="vat(included)"/>
        <Amount value={grandTotal} text="grand total" isHighlighted/>
      </AmountWrapper>
    </Container>
  );
};
