'use client';
import { FC } from 'react';
import {
  StyledPrice,
  StyledHeading,
  StyledContainer,
  StyledPara,
  StyledSpan,
  TextWrapper,
  ImageWrapper,
} from './IntroductionProduct.style';
import { AddToCart } from '@/components/Molecules/AddToCart/AddToCart';
import Image from 'next/image';
import { ImageSources } from '@/types/imageSources';
import { ResponsiveImage } from '@/components/Atoms/ResponsiveImage/ResponsiveImage';
import { CategoryImage } from '@/types/products';
import { generateImageSources } from '@/helpers/imageHelpers';

interface IntroductionProductProps {
  image: CategoryImage;
  description: string;
  price: number;
  isNew: boolean;
  title: string;
  shortName: string;
  id: number;
}

export const IntroductionProduct: FC<IntroductionProductProps> = ({
  image,
  description,
  isNew,
  title,
  shortName,
  price,
  id,
}) => {
  const priceValue = price.toLocaleString();
  const imageSources = generateImageSources(image.mobile, image.tablet, image.desktop);
  return (
    <StyledContainer>
      <ImageWrapper>
        <ResponsiveImage
          alt="Responsive Example"
          sources={imageSources}
          layoutType="fill"
          src={imageSources[0].srcSet || ''}
          objectFitType={'cover'}
        />
      </ImageWrapper>
      <TextWrapper>
        {isNew && <StyledSpan>New Product</StyledSpan>}
        <StyledHeading textLevel="h2">{title}</StyledHeading>
        <StyledPara textLevel="p">{description}</StyledPara>
        <StyledPrice>$ {priceValue}</StyledPrice>
        <AddToCart price={price} image={image.mobile} shortName={shortName} id={id} />
      </TextWrapper>
    </StyledContainer>
  );
};
