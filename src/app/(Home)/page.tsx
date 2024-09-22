'use client';

import { Hero } from '@/components/Molecules/Hero/Hero';
import { ProductLinkList } from '@/components/Molecules/ProductLinksList/ProductLinksList';
import { FC } from 'react';
import { Container } from './Home.style';
import { BestGear } from '@/components/Molecules/BestGear/BestGear';
import { MainGallery } from '@/components/Organisms/MainGallery/MainGallery';

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
