"use client";
import { FC } from "react";
import {
  StyledCustomLink,
  StyledHeading,
  StyledContainer,
  StyledImage,
  StyledPara,
  StyledSpan,
} from "./ItemCategoryPage.style";

interface ItemCategoryPageProps {
  product: string;
  href: string;
  img: string;
  isNew: boolean;
  category: string;
  description: string;
  slug: string;
}

export const ItemCategoryPage: FC<ItemCategoryPageProps> = ({
  product,
  isNew,
  img,
  category,
  slug,
  description,
}) => {
  console.log({ img });
  return (
    <StyledContainer>
      <StyledImage src={img} width={300} height={300} alt={product} />
      {isNew && <StyledSpan>New Product</StyledSpan>}
      <StyledHeading textLevel="h2">{product}</StyledHeading>
      <StyledPara textLevel="p">{description}</StyledPara>
      <StyledCustomLink href={`/${category}/${slug}`}>
        See product
      </StyledCustomLink>
    </StyledContainer>
  );
};
