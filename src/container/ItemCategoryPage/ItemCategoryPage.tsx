"use client";
import { FC } from "react";
import { StyledCustomLink, StyledHeading,StyledContainer,StyledImage } from "./ItemCategoryPage.style";

interface ProductLinkProps {
  product: string;
  href: string;
  img: string;
  isNew:boolean;
}

export const ItemCategoryPage: FC<ProductLinkProps> = ({ product, isNew,img }) => {
  return (
    <StyledContainer>
      <StyledImage
        src={img}
        width={120}
        height={120}
        alt={product}
      />
      {isNew && <span>New Product</span>}
      <StyledHeading textLevel="h2">{product}</StyledHeading>
      <StyledCustomLink href="">See product</StyledCustomLink>
    </StyledContainer>
  );
};
