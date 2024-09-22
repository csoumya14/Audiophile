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
          src={first.mobile}
          width={800}
          height={600}
        />
      </ImageContainer>
      <ImageContainer>
        <ResponsiveImage
          alt="Responsive Example"
          sources={imageSourcesSecond}
          src={second.mobile}
          width={800}
          height={600}
        />
      </ImageContainer>
      <ImageContainer>
        <ResponsiveImage
          alt="Responsive Example"
          sources={imageSourcesThird}
          src={third.mobile}
          width={800}
          height={600}
        />
      </ImageContainer>
    </Container>
  );
};
