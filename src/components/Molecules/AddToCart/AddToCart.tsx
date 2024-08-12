"use client";
import { FC, useState } from "react";
import {
  QuantityContainer,
  StyledAddToCartButton,
  StyledButton,
  StyledContainer,
} from "./AddToCart.style";
import { CartItem } from "@/types/products";
import { useCart } from "@/context/CartContext";
import { QuantityAddRemoveButton } from "@/components/Atoms/QuantityAddRemoveButton/QuantityAddRemoveButton";

interface AddToCartProps {
  price: number;
  image: string;
  shortName: string;
  id: number;
}

export const AddToCart: FC<AddToCartProps> = ({
  shortName,
  price,
  image,
  id,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { state, addToCart, updateQuantity } = useCart();
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToCart = () => {
    const existingItem = state.cart.find((item) => item.id === id);

    if (existingItem) {
      updateQuantity(existingItem.id, existingItem.quantity + quantity);
    } else {
      const newItem: CartItem = {
        quantity,
        id: id,
        price: price,
        shortName: shortName,
        image: image,
      };
      addToCart(newItem);
    }

    setQuantity(1);
  };

  return (
    <StyledContainer>
      <QuantityAddRemoveButton
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        quantity={quantity}
      />

      <StyledAddToCartButton type="submit" onClick={handleAddToCart}>
        Add to Cart
      </StyledAddToCartButton>
    </StyledContainer>
  );
};
