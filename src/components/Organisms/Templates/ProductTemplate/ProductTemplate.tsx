"use client";
import { Container, StyledButton } from "./ProductTemplate.style";
import { FC } from "react";
import { Product } from "@/types/products";
import { ProductPage } from "../../ProductPage/ProductPage";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Atoms/Button/Button";

interface CategoryTemplateProps {
  product: Product | null;
  subcategory: string;
}

export const ProductTemplate: FC<CategoryTemplateProps> = ({ product }) => {
  console.log({ product });
  const router = useRouter();
  return (
    <Container>
      <StyledButton onClick={() => router.back()} type="button">
        Go Back
      </StyledButton>
      {product && (
        <ProductPage
          image={product.categoryImage.mobile}
          isNew={product.new}
          description={product.description}
          price={product.price}
          features={product.features}
          includes={product.includes}
          gallery={product.gallery}
          others={product.others}
          title={product.name}
        />
      )}
    </Container>
  );
};
