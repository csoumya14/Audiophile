'use client';
import { Container, StyledButton } from './ProductTemplate.style';
import { FC } from 'react';
import { Product } from '@/types/products';
import { ProductPage } from '../ProductPage/ProductPage';
import { ProductLinkList } from '@/components/Molecules/ProductLinksList/ProductLinksList';
import { BestGear } from '@/components/Molecules/BestGear/BestGear';
import { GoBackButton } from '@/components/Atoms/GoBackButton/GoBackButton';

interface CategoryTemplateProps {
  product: Product | null;
  subcategory: string;
}

export const ProductTemplate: FC<CategoryTemplateProps> = ({ product }) => {
  return (
    <Container>
      <GoBackButton />
      {product && (
        <ProductPage
          image={product.categoryImage}
          isNew={product.new}
          description={product.description}
          price={product.price}
          id={product.id}
          features={product.features}
          includes={product.includes}
          gallery={product.gallery}
          others={product.others}
          title={product.name}
          shortName={product.shortName}
        />
      )}
      <ProductLinkList />
      <BestGear />
    </Container>
  );
};
