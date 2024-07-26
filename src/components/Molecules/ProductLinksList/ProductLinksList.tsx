"use client";
import { FC } from "react";
import { Container, StyledProductBox } from "./ProductLinksList.style";
import { ProductLinks } from "@/components/Molecules/ProductLink/ProductLink";
import { links } from "@/utils/Links/links";

interface ProductLinkListProps {
  toggleNav?: () => void;
}

export const ProductLinkList: FC<ProductLinkListProps> = ({toggleNav}) => {
  return (
    <Container>
      {links.slice(1).map((link) => (
        <ProductLinks
          product={link.text}
          img={link.img}
          key={link.id}
          href={link.url}
          toggleNav={toggleNav}
        />
      ))}
    </Container>
  );
};
