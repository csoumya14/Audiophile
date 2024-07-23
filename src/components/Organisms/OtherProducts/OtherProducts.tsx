import { Gallery, Other } from "@/types/products";
import { FC } from "react";
import Image from "next/image";
import { Container, StyledHeading } from "./OtherProducts.style";
import { OtherProductsLinks } from "@/components/Molecules/OtherProductLinks/OtherProductLinks";

interface OtherProductsProps {
  other: Other[];
}

export const OtherProducts: FC<OtherProductsProps> = ({ other }) => {
  return (
    <>
      <StyledHeading textLevel="h4">You may also like</StyledHeading>
      <Container>
        {other?.map((product) => (
          <OtherProductsLinks key={product.slug} productDetails={product} />
        ))}
      </Container>
    </>
  );
};
