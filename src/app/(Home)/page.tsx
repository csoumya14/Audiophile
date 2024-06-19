"use client";

import { Hero } from "@/container/Hero/Hero";
import { ProductLinkList } from "@/container/ProductLinksList/ProductLinksList";
import { FC } from "react";
import { Container } from "./Home.style";
import { ZX9Speaker } from "@/container/ZX9Speaker/ZX9Speaker";
import { ZX7Speaker } from "@/container/ZX7Speaker/ZX7Speaker";
import { YX1Earphones } from "@/container/YX1Earphones/YX1Earphones";
import { BestGear } from "@/container/BestGear/BestGear";

interface HomeProps {}

const HomePage: FC<HomeProps> = () => {
  return (
    <Container>
      <Hero />
      <ProductLinkList />
      <ZX9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
      <BestGear />
    </Container>
  );
};

export default HomePage;
