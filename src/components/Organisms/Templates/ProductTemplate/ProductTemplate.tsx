"use client";
import { Container, StyledButton, Wrapper } from "./ProductTemplate.style";
import { FC } from "react";
import { Product } from "@/types/products";
import { ProductPage } from "../../ProductPage/ProductPage";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Atoms/Button/Button";
import { ProductLinkList } from "@/components/Molecules/ProductLinksList/ProductLinksList";
import { BestGear } from "@/components/Molecules/BestGear/BestGear";

interface CategoryTemplateProps {
  product: Product | null;
  subcategory: string;
}

export const ProductTemplate: FC<CategoryTemplateProps> = ({ product }) => {
  const router = useRouter();
  const imageSources = [
    {
      srcSet: product?.categoryImage.mobile,
      media: "(max-width: 300px)",
      type: "image/jpeg",
    },
    {
      srcSet: product?.categoryImage.tablet,
      media: "(min-width: 700px)",
      type: "image/jpeg",
    },
    {
      srcSet: product?.categoryImage.desktop,
      media: "(min-width: 992px)",
      type: "image/jpeg",
    },
  ];
  return (
    <Container>
      <StyledButton onClick={() => router.back()} type="button">
        Go Back
      </StyledButton>
      {product && (
        <ProductPage
          image={product.categoryImage.mobile}
          imageSources={imageSources}
          isNew={product.new}
          description={product.description}
          price={product.price}
          id={product.id}
          features={product.features}
          includes={product.includes}
          gallery={product.gallery}
          others={product.others}
          title={product.name}
        />
      )}
      <Wrapper>
        <ProductLinkList />
        <BestGear />
      </Wrapper>
    </Container>
  );
};
