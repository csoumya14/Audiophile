'use client';
import { FC } from 'react';
import {
  StyledCustomLink,
  StyledHeading,
  StyledContainer,
  StyledPara,
  StyledSpan,
  ImageWrapper,
  TextWrapper,
} from './ItemCategoryPage.style';
import { generateImageSources } from '@/helpers/imageHelpers';
import { ResponsiveImage } from '@/components/Atoms/ResponsiveImage/ResponsiveImage';
import { CategoryImage } from '@/types/products';

interface ItemCategoryPageProps {
  product: string;
  href: string;
  image: CategoryImage;
  isNew: boolean;
  category: string;
  description: string;
  slug: string;
}

export const ItemCategoryPage: FC<ItemCategoryPageProps> = ({
  product,
  isNew,
  image,
  category,
  slug,
  description,
}) => {
  const imageSources = generateImageSources(image.mobile, image.tablet, image.desktop);
  return (
    <StyledContainer>
      <ImageWrapper>
        <ResponsiveImage
          alt="Responsive Example"
          layoutType="fill"
          sources={imageSources}
          src={imageSources[0].srcSet || ''}
        />
      </ImageWrapper>
      <TextWrapper>
        {isNew && <StyledSpan>New Product</StyledSpan>}
        <StyledHeading textLevel="h2">{product}</StyledHeading>
        <StyledPara textLevel="p">{description}</StyledPara>
        <StyledCustomLink href={`/${category}/${slug}`}>See product</StyledCustomLink>
      </TextWrapper>
    </StyledContainer>
  );
};
