'use client';
import { Container } from './CategoryTemplate.style';
import { HeadingCategory } from '@/components/Molecules/HeadingCategory/HeadingCategory';
import { ItemCategoryPage } from '@/components/Organisms/ItemCategoryPage/ItemCategoryPage';
import { ProductLinkList } from '@/components/Molecules/ProductLinksList/ProductLinksList';
import { BestGear } from '@/components/Molecules/BestGear/BestGear';
import { FC } from 'react';
import { Product } from '@/types/products';

interface CategoryTemplateProps {
  products: Product[];
  category: string;
}

export const CategoryTemplate: FC<CategoryTemplateProps> = ({ products, category }) => {
  return (
    <>
      <HeadingCategory headingText={category} />
      <Container>
        {products.map(item => (
          <ItemCategoryPage
            key={item.id}
            product={item.name}
            category={item.category}
            slug={item.slug}
            href={item.slug}
            image={item.categoryImage}
            isNew={item.new}
            description={item.description}
          />
        ))}
        <ProductLinkList />
        <BestGear />
      </Container>
    </>
  );
};
