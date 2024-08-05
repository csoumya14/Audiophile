"use client";
import { FC } from "react";
import Image from "next/image";
import {
  StyledHeading,
  Container,
  StyledPara,
  ImageWrapper,
  TextWrapper,
} from "./BestGear.style";
import { ResponsiveImage } from "@/components/Atoms/ResponsiveImage/ResponsiveImage";

interface BestGearProps {}

const imageSources = [
  {
    srcSet: "/images/shared/mobile/image-best-gear.jpg",
    media: "(max-width: 699px)",
    type: "image/jpeg",
  },
  {
    srcSet: "/images/shared/tablet/image-best-gear.jpg",
    media: "(min-width: 700px)",
    type: "image/jpeg",
  },
  {
    srcSet: "/images/shared/desktop/image-best-gear.jpg",
    media: "(min-width: 992px)",
    type: "image/jpeg",
  },
];

export const BestGear: FC<BestGearProps> = () => {
  return (
    <Container>
      <ImageWrapper>
        <ResponsiveImage
          alt="Responsive Example"
          sources={imageSources}
          src="/images/home/mobile/image-earphones-yx1.png"
        />
      </ImageWrapper>
      <TextWrapper>
        <StyledHeading textLevel={"h4"}>
          Bringing you the <span>best</span> audio gear
        </StyledHeading>
        <StyledPara textLevel="p">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </StyledPara>
      </TextWrapper>
    </Container>
  );
};
