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

interface CartProductListProps {}

export const CartProductList: React.FC<CartProductListProps> = ({}) => {
  const { state, updateQuantity } = useCart();

  return (
    <StyledListContainer>
      {state.cart.map((product: CartItem) => (
        <StyledList key={product.id} >
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
          <QuantityAddRemoveButton
            decreaseQuantity={() =>
              updateQuantity(product.id, product.quantity - 1)
            }
            increaseQuantity={() =>
              updateQuantity(product.id, product.quantity + 1)
            }
            quantity={product.quantity}
          />
        </StyledList>
      ))}
    </StyledListContainer>
  );
};
