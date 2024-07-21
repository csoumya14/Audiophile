// context/CartContext.tsx
import { CartItem } from '@/types/products';
import { getCart, setCart } from '@/utils/localStorageHelpers';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';


interface CartContextProps {
  cart: CartItem[];
  setCartState: (cart: CartItem[]) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCartState] = useState<CartItem[]>([]);

  useEffect(() => {
    const cartItems = getCart();
    setCartState(cartItems);
  }, []);

  const updateCart = (newCart: CartItem[]) => {
    setCart(newCart);
    setCartState(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, setCartState: updateCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
