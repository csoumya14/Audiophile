"use client";
import { FC } from "react";
import { StyledContainer } from "./ProductPage.style";
import { Gallery, IncludedItem, Other } from "@/types/products";
import { IncludedItems } from "@/components/Molecules/IncludedItems/IncludedItems";
import { ProductGallery } from "@/components/Molecules/ProductGallery/ProductGallery";
import { OtherProducts } from "../OtherProducts/OtherProducts";
import { IntroductionProduct } from "@/components/Molecules/IntroductionProduct/IntroductionProduct";
import { ImageSources } from "@/types/imageSources";
import { FeaturesProduct } from "@/components/Molecules/FeaturesProduct/FeaturesProduct";

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
  imageSources: ImageSources[];
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
  imageSources,
}) => {
  return (
    <StyledContainer>
      <IntroductionProduct
        image={image}
        imageSources={imageSources}
        description={description}
        price={price}
        isNew={isNew}
        title={title}
      />
      <FeaturesProduct features={features} />
      <IncludedItems includes={includes} />
      <ProductGallery gallery={gallery} />
      <OtherProducts other={others} />
    </StyledContainer>
  );
};
