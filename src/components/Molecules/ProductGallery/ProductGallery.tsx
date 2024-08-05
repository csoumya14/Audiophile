import { CategoryImage, Gallery } from "@/types/products";
import { FC } from "react";
import Image from "next/image";
import { Container, ImageContainer } from "./ProductGallery.style";
import { ResponsiveImage } from "@/components/Atoms/ResponsiveImage/ResponsiveImage";

interface ProductGalleryProps {
  gallery: Gallery;
}

const generateImageSources = (item: CategoryImage) => [
  {
    srcSet: item.mobile,
    media: "(max-width: 699px)",
    type: "image/jpeg",
  },
  {
    srcSet: item.tablet,
    media: "(min-width: 700px)",
    type: "image/jpeg",
  },
  {
    srcSet: item.desktop,
    media: "(min-width: 992px)",
    type: "image/jpeg",
  },
];

export const ProductGallery: FC<ProductGalleryProps> = ({ gallery }) => {
  const { first, second, third } = gallery;

  const imageSourcesFirst = generateImageSources(first);
  const imageSourcesSecond = generateImageSources(second);
  const imageSourcesThird = generateImageSources(third);

  return (
    <Container>
      <ImageContainer>
        <ResponsiveImage
          alt="Responsive Example"
          sources={imageSourcesFirst}
          src={first.mobile}
        />
      </ImageContainer>
      <ImageContainer>
        <ResponsiveImage
          alt="Responsive Example"
          sources={imageSourcesSecond}
          src={second.mobile}
        />
      </ImageContainer>
      <ImageContainer>
        <ResponsiveImage
          alt="Responsive Example"
          sources={imageSourcesThird}
          src={third.mobile}
        />
      </ImageContainer>
    </Container>
  );
};
