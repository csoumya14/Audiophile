"use client";

import { Hero } from "@/components/Molecules/Hero/Hero";
import { ProductLinkList } from "@/components/Molecules/ProductLinksList/ProductLinksList";
import { FC } from "react";
import { Container } from "./Home.style";
import { ZX9Speaker } from "@/components/Molecules/ZX9Speaker/ZX9Speaker";
import { ZX7Speaker } from "@/components/Molecules/ZX7Speaker/ZX7Speaker";
import { YX1Earphones } from "@/components/Molecules/YX1Earphones/YX1Earphones";
import { BestGear } from "@/components/Molecules/BestGear/BestGear";
import { MainGallery } from "@/components/Organisms/MainGallery/MainGallery";

interface HomeProps {}

const HomePage: FC<HomeProps> = () => {
  return (
    <Container>
      <Hero />
      <ProductLinkList />
      <MainGallery />
      <BestGear />
    </Container>
  );
};

export default HomePage;
