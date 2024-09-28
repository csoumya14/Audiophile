'use client';
import { FC } from 'react';
import { StyledContainer, Wrapper } from './ProductPage.style';
import { CategoryImage, Gallery, IncludedItem, Other } from '@/types/products';
import { IncludedItems } from '@/components/Molecules/IncludedItems/IncludedItems';
import { ProductGallery } from '@/components/Molecules/ProductGallery/ProductGallery';
import { OtherProducts } from '../OtherProducts/OtherProducts';
import { IntroductionProduct } from '@/components/Molecules/IntroductionProduct/IntroductionProduct';
import { ImageSources } from '@/types/imageSources';
import { FeaturesProduct } from '@/components/Molecules/FeaturesProduct/FeaturesProduct';

interface ProductPageProps {
  image: CategoryImage;
  id: number;
  description: string;
  price: number;
  features: string;
  includes: IncludedItem[];
  gallery: Gallery;
  others: Other[];
  isNew: boolean;
  title: string;
  shortName: string;
}

export const ProductPage: FC<ProductPageProps> = ({
  image,
  description,
  isNew,
  title,
  shortName,
  price,
  features,
  includes,
  gallery,
  others,
  id,
}) => {
  return (
    <StyledContainer>
      <IntroductionProduct
        image={image}
        shortName={shortName}
        description={description}
        price={price}
        isNew={isNew}
        title={title}
        id={id}
      />
      <Wrapper>
        <FeaturesProduct features={features} />
        <IncludedItems includes={includes} />
      </Wrapper>
      <ProductGallery gallery={gallery} />
      <OtherProducts other={others} />
    </StyledContainer>
  );
};
