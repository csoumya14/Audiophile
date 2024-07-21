// components/CartCount.tsx
import { Cart } from "@/components/Atoms/SVGs/Cart/Cart";
import { useCart } from "@/context/CartContext";
import React, { FC } from "react";
import { Container } from "./CartCount.style";

interface CartCountProps {}

export const CartCount: FC<CartCountProps> = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Container>
      <Cart />
      {itemCount > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-10px",
            right: "-10px",
            background: "red",
            color: "white",
            borderRadius: "50%",
            padding: "5px 10px",
            fontSize: "12px",
          }}
        >
          {itemCount}
        </span>
      )}
    </Container>
  );
};
