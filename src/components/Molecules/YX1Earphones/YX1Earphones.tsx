'use client';
import { FC } from 'react';
import {
  StyledHeading,
  Container,
  StyledCustomLink,
  Wrapper,
  ImageWrapper,
} from './YX1Earphones.style';
import { ResponsiveImage } from '@/components/Atoms/ResponsiveImage/ResponsiveImage';

interface YX1EarphonesProps {}

const imageSources = [
  {
    srcSet: '/images/home/mobile/image-earphones-yx1.jpg',
    media: '(max-width: 699px)',
    type: 'image/jpeg',
  },
  {
    srcSet: '/images/home/tablet/image-earphones-yx1.jpg',
    media: '(min-width: 700px)',
    type: 'image/jpeg',
  },
  {
    srcSet: '/images/home/desktop/image-earphones-yx1.jpg',
    media: '(min-width: 992px)',
    type: 'image/jpeg',
  },
];

export const YX1Earphones: FC<YX1EarphonesProps> = () => {
  return (
    <Container>
      <ImageWrapper>
        <ResponsiveImage
          alt="Responsive Example"
          sources={imageSources}
          src="/images/home/mobile/image-earphones-yx1.png"
          width={800}
          height={600}
        />
      </ImageWrapper>
      <Wrapper>
        <StyledHeading textLevel={'h3'}>YX1 Earphones</StyledHeading>
        <StyledCustomLink href="/earphones/yx1-earphones">See product</StyledCustomLink>
      </Wrapper>
    </Container>
  );
};
