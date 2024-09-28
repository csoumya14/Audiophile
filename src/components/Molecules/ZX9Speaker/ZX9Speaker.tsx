'use client';
import { FC } from 'react';
import {
  StyledHeading,
  Container,
  StyledPara,
  StyledCustomLink,
  TextWrapper,
  ImageContainer,
} from './ZX9Speaker.style';
import { ResponsiveImage } from '@/components/Atoms/ResponsiveImage/ResponsiveImage';

interface ZX9SpeakerProps {}

const imageSources = [
  {
    srcSet: '/images/image-small.jpg',
    media: '(max-width: 300px)',
    type: 'image/jpeg',
  },
  {
    srcSet: '/images/home/tablet/image-speaker-zx9.png',
    media: '(min-width: 700px)',
    type: 'image/jpeg',
  },
  {
    srcSet: '/images/home/desktop/image-speaker-zx9.png',
    media: '(min-width: 992px)',
    type: 'image/jpeg',
  },
];

export const ZX9Speaker: FC<ZX9SpeakerProps> = () => {
  return (
    <Container>
      <ImageContainer>
        <ResponsiveImage
          alt="Responsive Example"
          layoutType="responsive"
          sources={imageSources}
          src="/images/home/mobile/image-speaker-zx9.png"
          width={800}
          height={600}
          objectFitType={'cover'}
        />
      </ImageContainer>
      <TextWrapper>
        <StyledHeading textLevel={'h2'}>ZX9 Speaker</StyledHeading>
        <StyledPara textLevel="p">
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </StyledPara>
        <StyledCustomLink href="/speakers/zx9-speaker">See product</StyledCustomLink>
      </TextWrapper>
    </Container>
  );
};
