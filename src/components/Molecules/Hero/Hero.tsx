'use client';
import { FC } from 'react';
import {
  ImageWrapper,
  StyledCustomLink,
  StyledHeading,
  StyledPara,
  StyledSpan,
  TextContainer,
  Wrapper,
} from './Hero.style';
import { ResponsiveImage } from '@/components/Atoms/ResponsiveImage/ResponsiveImage';

interface HeroProps {}
const imageSources = [
  {
    srcSet: '/images/home/mobile/image-header.jpg',
    media: '(max-width: 699px)',
    type: 'image/jpeg',
  },
  {
    srcSet: '/images/home/tablet/image-header.jpg',
    media: '(min-width: 700px)',
    type: 'image/jpeg',
  },
  {
    srcSet: '/images/home/desktop/image-header.jpg',
    media: '(min-width: 992px)',
    type: 'image/jpeg',
  },
];

export const Hero: FC<HeroProps> = () => {
  return (
    <Wrapper>
      <TextContainer>
        <StyledSpan>New product</StyledSpan>
        <StyledHeading textLevel={'h1'}>XX99 Mark II Headphones</StyledHeading>
        <StyledPara textLevel={'p'}>
          Experience natural, lifelike audio and exceptional build quality made for the passionate
          music enthusiast.
        </StyledPara>
        <StyledCustomLink href="/headphones/xx99-mark-two-headphones">See product</StyledCustomLink>
      </TextContainer>
      <ImageWrapper>
        <ResponsiveImage
          alt="Responsive Example"
          sources={imageSources}
          width={800}
          height={600}
          src="/images/home/mobile/image-headers.png"
        />
      </ImageWrapper>
    </Wrapper>
  );
};
