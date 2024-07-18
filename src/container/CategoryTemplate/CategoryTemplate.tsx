"use client";
import useSWR from "swr";
import { Container } from "./CategoryTemplate.style";
import { HeadingCategory } from "@/container/HeadingCategory/HeadingCategory";
import { getProductsByCategory } from "@/utils/products";

import { ItemCategoryPage } from "@/container/ItemCategoryPage/ItemCategoryPage";
import { ProductLinkList } from "@/container/ProductLinksList/ProductLinksList";
import { BestGear } from "@/container/BestGear/BestGear";
import { FC } from "react";
import { Product } from "@/types/products";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

interface CategoryTemplateProps {
  products: Product[];
  category: string;
}

export const CategoryTemplate: FC<CategoryTemplateProps> = ({
  products,
  category,
}) => {
  console.log(category);
  return (
    <Container>
      <HeadingCategory headingText={category} />
      {products.map((item) => (
        <ItemCategoryPage
          key={item.id}
          product={item.name}
          category={item.category}
          slug={item.slug}
          href={item.slug}
          img={item.categoryImage.mobile}
          isNew={item.new}
          description={item.description}
        />
      ))}
      <ProductLinkList />
      <BestGear />
    </Container>
  );
};
