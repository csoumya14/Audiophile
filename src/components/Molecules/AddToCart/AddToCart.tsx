"use client";
import { FC, useState } from "react";
import Image from "next/image";
import {
  QuantityContainer,
  StyledAddToCartButton,
  StyledButton,
  StyledContainer,
} from "./AddToCart.style";
import { CartItem } from "@/types/products";
import { useCart } from "@/context/CartContext";

interface AddToCartProps {
  price: number;
  image: string;
  title: string;
}

export const AddToCart: FC<AddToCartProps> = ({ title, price, image }) => {
  const [quantity, setQuantity] = useState(1);
  const { cart, setCartState } = useCart();
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToCart = () => {
    const updatedCart = [...cart];

    const itemIndex = updatedCart.findIndex((item) => item.name === title);

    if (itemIndex > -1) {
      updatedCart[itemIndex].quantity += quantity;
    } else {
      const newItem: CartItem = {
        quantity,
        price: price,
        name: title,
        image: image,
      };
      updatedCart.push(newItem);
    }

    setCartState(updatedCart);
    setQuantity(1);
  };

  return (
    <StyledContainer>
      <QuantityContainer>
        <StyledButton type="button" onClick={decreaseQuantity}>
          -
        </StyledButton>
        {quantity}
        <StyledButton onClick={increaseQuantity} type="button">
          +
        </StyledButton>
      </QuantityContainer>
      <StyledAddToCartButton type="submit" onClick={handleAddToCart}>
        Add to Cart
      </StyledAddToCartButton>
    </StyledContainer>
  );
};
