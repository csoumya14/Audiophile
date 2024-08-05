"use client";
import { FC } from "react";
import {
  StyledPrice,
  StyledHeading,
  StyledContainer,
  StyledPara,
  StyledSpan,
  TextWrapper,
  ImageWrapper,
} from "./IntroductionProduct.style";
import { AddToCart } from "@/components/Molecules/AddToCart/AddToCart";
import Image from "next/image";
import { ImageSources } from "@/types/imageSources";
import { ResponsiveImage } from "@/components/Atoms/ResponsiveImage/ResponsiveImage";

interface IntroductionProductProps {
  image: string;
  description: string;
  price: number;
  isNew: boolean;
  title: string;
  imageSources: ImageSources[];
}

export const IntroductionProduct: FC<IntroductionProductProps> = ({
  image,
  description,
  isNew,
  title,
  price,
  imageSources,
}) => {
  const priceValue = price.toLocaleString();

  return (
    <StyledContainer>
      <ImageWrapper>
        <ResponsiveImage
          alt="Responsive Example"
          sources={imageSources}
          src={imageSources[0].srcSet || ""}
        />
      </ImageWrapper>
      <TextWrapper>
        {isNew && <StyledSpan>New Product</StyledSpan>}
        <StyledHeading textLevel="h2">{title}</StyledHeading>
        <StyledPara textLevel="p">{description}</StyledPara>
        <StyledPrice>$ {priceValue}</StyledPrice>
        <AddToCart price={price} image={image} title={title} />
      </TextWrapper>
    </StyledContainer>
  );
};
