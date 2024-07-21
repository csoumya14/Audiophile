"use client";
import { FC, useState } from "react";
import {
  StyledPrice,
  StyledHeading,
  StyledContainer,
  StyledImage,
  StyledPara,
  StyledSpan,
} from "./ProductPage.style";
import {
  CartItem,
  CategoryImage,
  Gallery,
  IncludedItem,
  Other,
} from "@/types/products";
import { AddToCart } from "@/components/Molecules/AddToCart/AddToCart";
import { getCart, setCart } from "@/utils/localStorageHelpers";

interface ProductPageProps {
  image: string;
  id: number;
  description: string;
  price: number;
  features: string;
  includes: IncludedItem[];
  gallery: Gallery;
  others: Other[];
  isNew: boolean;
  title: string;
}

export const ProductPage: FC<ProductPageProps> = ({
  image,
  id,
  description,
  isNew,
  title,
  price,
  features,
  includes,
  gallery,
  others,
}) => {
  const priceValue = price.toLocaleString();
  /* const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToCart = () => {
    const cart: CartItem[] = getCart();

    const itemIndex = cart.findIndex((item) => item.name === title);

    if (itemIndex > -1) {
      cart[itemIndex].quantity += quantity;
    } else {
      const newItem: CartItem = {
        quantity,
        price: price,
        name: title,
        image: image,
      };
      cart.push(newItem);
    }

    setCart(cart);
    setQuantity(1);
  }; */
  return (
    <StyledContainer>
      <StyledImage src={image} width={300} height={300} alt={title} />
      {isNew && <StyledSpan>New Product</StyledSpan>}
      <StyledHeading textLevel="h2">{title}</StyledHeading>
      <StyledPara textLevel="p">{description}</StyledPara>
      <StyledPrice>$ {priceValue}</StyledPrice>
      <AddToCart price={price} image={image} title={title} />
      <StyledHeading textLevel="h4">Features</StyledHeading>
      <StyledPara textLevel="p">{features}</StyledPara>
    </StyledContainer>
  );
};
