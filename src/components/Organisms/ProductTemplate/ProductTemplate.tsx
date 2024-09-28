'use client';
import { Container, StyledButton } from './ProductTemplate.style';
import { FC } from 'react';
import { Product } from '@/types/products';
import { ProductPage } from '../ProductPage/ProductPage';
import { useRouter } from 'next/navigation';
import { ProductLinkList } from '@/components/Molecules/ProductLinksList/ProductLinksList';
import { BestGear } from '@/components/Molecules/BestGear/BestGear';

interface CategoryTemplateProps {
  product: Product | null;
  subcategory: string;
}

export const ProductTemplate: FC<CategoryTemplateProps> = ({ product }) => {
  const router = useRouter();

  return (
    <Container>
      <StyledButton onClick={() => router.back()} type="button">
        Go Back
      </StyledButton>
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
