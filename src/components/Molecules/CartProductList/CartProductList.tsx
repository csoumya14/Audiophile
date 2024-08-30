import React from "react";
import { CartItem } from "@/types/products";
import { useCart } from "@/context/CartContext";
import { QuantityAddRemoveButton } from "@/components/Atoms/QuantityAddRemoveButton/QuantityAddRemoveButton";
import {
  StyledImage,
  StyledList,
  StyledListContainer,
  StyledName,
  StyledPara,
  StyledProductNamePriceContainer,
} from "./CartProductList.style";
import { CartProductListItem } from "../CartProductListItem/CartProductListItem";

interface CartProductListProps {
  isSummary?: boolean;
}

export const CartProductList: React.FC<CartProductListProps> = ({
  isSummary,
}) => {
  const { state } = useCart();

  return (
    <StyledListContainer>
      {state.cart.map((product: CartItem) => (
        <CartProductListItem
          key={product.id}
          product={product}
          isSummary={isSummary}
        />
      ))}
    </StyledListContainer>
  );
};
