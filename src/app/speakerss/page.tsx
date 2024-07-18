/* "use client";

import { FC } from "react";
import useSWR from "swr";
import { Container } from "./Speakers.style";
import { HeadingCategory } from "@/container/HeadingCategory/HeadingCategory";
import { getProductsByCategory } from "@/utils/products";

import { ItemCategoryPage } from "@/container/ItemCategoryPage/ItemCategoryPage";
import { ProductLinkList } from "@/container/ProductLinksList/ProductLinksList";
import { BestGear } from "@/container/BestGear/BestGear";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

interface HeadPhonePageProps {}

const HeadPhonePage: FC<HeadPhonePageProps> = () => {
  const { data, isLoading, error } = useSWR("/api/products", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  if (!data) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  const categoryData = getProductsByCategory("speakers", data.products);
  console.log(categoryData);

  return (
    <Container>
      <HeadingCategory headingText={"Speakers"} />
      {categoryData.map((item) => (
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

export default HeadPhonePage;
 */