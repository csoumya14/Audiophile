"use client";
import { FC } from "react";
import {
  StyledCustomLink,
  StyledImage,
  StyledProductBox,
  StyledSpan,
} from "./ProductLink.style";
import { ArrowPath } from "@/components/Atoms/SVGs/ArrowPath/ArrowPath";

interface ProductLinkProps {
  product: string;
  href: string;
  img?: string;
}

export const ProductLinks: FC<ProductLinkProps> = ({
  product,
  href,
  img = "",
}) => {
  return (
    <StyledProductBox>
      <StyledImage src={img} width={120} height={120} alt={product} />
      <StyledSpan>{product}</StyledSpan>
      <StyledCustomLink href={href}>
        shop <ArrowPath />
      </StyledCustomLink>
    </StyledProductBox>
  );
};
