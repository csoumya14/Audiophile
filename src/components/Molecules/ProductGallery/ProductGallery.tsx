import { Gallery } from '@/types/products';
import { FC } from 'react';
import { Container, ImageContainer } from './ProductGallery.style';
import { ResponsiveImage } from '@/components/Atoms/ResponsiveImage/ResponsiveImage';
import { generateImageSources } from '@/helpers/imageHelpers';

interface ProductGalleryProps {
  gallery: Gallery;
}

export const ProductGallery: FC<ProductGalleryProps> = ({ gallery }) => {
  const { first, second, third } = gallery;

  const imageSourcesFirst = generateImageSources(first.mobile, first.tablet, first.desktop);
  const imageSourcesSecond = generateImageSources(second.mobile, second.tablet, second.desktop);
  const imageSourcesThird = generateImageSources(third.mobile, third.tablet, third.desktop);

  return (
    <Container>
      <ImageContainer>
        <ResponsiveImage
          alt="Responsive Example"
          sources={imageSourcesFirst}
          layoutType="fill"
          src={first.mobile}
          objectFitType={'cover'}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </ImageContainer>
      <ImageContainer>
        <ResponsiveImage
          alt="Responsive Example"
          sources={imageSourcesSecond}
          layoutType="fill"
          src={second.mobile}
          objectFitType={'cover'}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </ImageContainer>
      <ImageContainer>
        <ResponsiveImage
          alt="Responsive Example"
          sources={imageSourcesThird}
          layoutType="fill"
          src={third.mobile}
          objectFitType={'cover'}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </ImageContainer>
    </Container>
  );
};
