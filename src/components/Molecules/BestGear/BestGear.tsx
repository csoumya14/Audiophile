"use client";
import { FC } from "react";
import Image from "next/image";
import {
  StyledHeading,
  Container,
  StyledPara,
  ImageWrapper,
} from "./BestGear.style";

interface BestGearProps {}

export const BestGear: FC<BestGearProps> = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image
          src="/images/shared/mobile/image-best-gear.jpg"
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: "10px" }}
          alt="a man"
        />
      </ImageWrapper>
      <StyledHeading textLevel={"h4"}>
        Bringing you the best audio gear
      </StyledHeading>
      <StyledPara textLevel="p">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </StyledPara>
    </Container>
  );
};
