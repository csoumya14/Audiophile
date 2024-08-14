import { Cart } from "@/components/Atoms/SVGs/Cart/Cart";
import { useCart } from "@/context/CartContext";
import React, { FC } from "react";
import { Container } from "./CartCount.style";

interface CartCountProps {}

export const CartCount: FC<CartCountProps> = () => {
  const { state } = useCart();
  console.log('count',state.cart)
  const itemCount = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Container>
      <Cart color="#fff" width="40" height="40" />
      {state.cart.length > 0 && (
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
