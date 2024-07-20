"use client";
import { FC } from "react";
import {
  StyledPrice,
  StyledHeading,
  StyledContainer,
  StyledImage,
  StyledPara,
  StyledSpan,
} from "./ProductPage.style";
import { CategoryImage, Gallery, IncludedItem, Other } from "@/types/products";

interface ProductPageProps {
  image: string;
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
  description,
  isNew,
  title,
  price,
  features,
  includes,
  gallery,
  others,
}) => {
  return (
    <StyledContainer>
      <StyledImage src={image} width={300} height={300} alt={title} />
      {isNew && <StyledSpan>New Product</StyledSpan>}
      <StyledHeading textLevel="h2">{title}</StyledHeading>
      <StyledPara textLevel="p">{description}</StyledPara>
      <StyledPrice>{price}</StyledPrice>
      <StyledHeading textLevel="h4">Features</StyledHeading>
      <StyledPara textLevel="p">{features}</StyledPara>
    </StyledContainer>
  );
};
