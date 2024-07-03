"use client";

import { FC } from "react";
import useSWR from "swr";
import { HeadingCategory } from "@/container/HeadingCategory/HeadingCategory";
import { getProductDetails } from "@/utils/products";

import { ItemCategoryPage } from "@/container/ItemCategoryPage/ItemCategoryPage";
import { Container } from "./XX99MarkTwoHeadPhone.style";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

interface HeadPhonePageProps {}

const XX99MarkTwoHeadPhonePage: FC<HeadPhonePageProps> = () => {
  const { data, isLoading, error } = useSWR("/api/products", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  if (!data) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  const categoryData = getProductDetails(
    "xx99-mark-two-headphones",
    data.products
  );
  console.log(categoryData);

  return (
    <Container>
      <HeadingCategory headingText={"Headphones"} />
    </Container>
  );
};

export default XX99MarkTwoHeadPhonePage;
