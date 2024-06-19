"use client";
import { FC } from "react";
import { Container, StyledProductBox } from "./ProductLinksList.style";
import { ProductLinks } from "@/components/ProductLink/ProductLink";
import { links } from "@/utils/Links/links";

interface ProductLinkListProps {}

export const ProductLinkList: FC<ProductLinkListProps> = () => {
  return (
    <Container>
      {links.slice(1).map((link) => (
        <ProductLinks
          product={link.text}
          img={link.img}
          key={link.id}
          href={link.url}
        />
      ))}
    </Container>
  );
};
