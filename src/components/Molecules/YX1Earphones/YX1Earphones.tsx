"use client";
import { FC } from "react";
import {
  StyledHeading,
  Container,
  StyledCustomLink,
  Wrapper,
  ImageWrapper,
} from "./YX1Earphones.style";
import Image from "next/image";

interface YX1EarphonesProps {}

export const YX1Earphones: FC<YX1EarphonesProps> = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image
          src="/images/home/mobile/image-earphones-yx1.jpg"
          layout="fill"
          objectFit="cover"
          style={{borderRadius:"10px"}}
          alt="speakerZX9"
        />
      </ImageWrapper> 
      <Wrapper>
        <StyledHeading textLevel={"h3"}>YX1 Earphones</StyledHeading>
        <StyledCustomLink href="/earphones/yx1-earphones">See product</StyledCustomLink>
      </Wrapper>
    </Container>
  );
};
