"use client";

import { Hero } from "@/container/Hero/Hero";
import { ProductLinkList } from "@/container/ProductLinksList/ProductLinksList";
import { FC, useEffect, useState } from "react";
import { ZX9Speaker } from "@/container/ZX9Speaker/ZX9Speaker";
import { ZX7Speaker } from "@/container/ZX7Speaker/ZX7Speaker";
import { YX1Earphones } from "@/container/YX1Earphones/YX1Earphones";
import { BestGear } from "@/container/BestGear/BestGear";
import useSWR from "swr";
import { Container } from "./HeadPhone.style";
import { HeadingCategory } from "@/container/HeadingCategory/HeadingCategory";
import { getProductsByCategory } from "@/utils/products";
import { Product } from "@/types/products";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

interface HeadPhonePageProps {}

const HeadPhonePage: FC<HeadPhonePageProps> = () => {
  const { data, error } = useSWR("/api/products", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const categoryData = getProductsByCategory("headphones", data.products);
  console.log(categoryData);

  return (
    <Container>
      <HeadingCategory headingText={"Headphones"} />
    </Container>
  );
};

export default HeadPhonePage;
