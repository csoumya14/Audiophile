import React from "react";
import { CartItem } from "@/types/products";
import { useCart } from "@/context/CartContext";
import { QuantityAddRemoveButton } from "@/components/Atoms/QuantityAddRemoveButton/QuantityAddRemoveButton";
import {
  StyledImage,
  StyledList,
  StyledName,
  StyledPara,
  StyledProductNamePriceContainer,
} from "./CartProductListItem.style";

interface CartProductListItemProps {
  isSummary?: boolean;
  product: CartItem;
}

export const CartProductListItem: React.FC<CartProductListItemProps> = ({
  isSummary,
  product,
}) => {
  const { updateQuantity } = useCart();

  return (
    <StyledList key={product.id}>
      <StyledImage
        src={product.image}
        width={80}
        height={80}
        alt="Picture of the product"
      />
      <StyledProductNamePriceContainer>
        <StyledName textLevel="h4">{product.shortName}</StyledName>
        <StyledPara textLevel="p">
          $ {product.price.toLocaleString()}
        </StyledPara>
      </StyledProductNamePriceContainer>
      {isSummary ? (
        <div>x{product.quantity}</div>
      ) : (
        <QuantityAddRemoveButton
          decreaseQuantity={() =>
            updateQuantity(product.id, product.quantity - 1)
          }
          increaseQuantity={() =>
            updateQuantity(product.id, product.quantity + 1)
          }
          quantity={product.quantity}
        />
      )}
    </StyledList>
  );
};
