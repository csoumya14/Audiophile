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
import { IncludedItems } from "@/components/Molecules/IncludedItems/IncludedItems";
import { ProductGallery } from "@/components/Molecules/ProductGallery/ProductGallery";
import { OtherProducts } from "../OtherProducts/OtherProducts";

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
      <IncludedItems includes={includes}/>
      <ProductGallery gallery={gallery}/>
      <OtherProducts other={others}/>
    </StyledContainer>
  );
};
