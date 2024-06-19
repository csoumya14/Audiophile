"use client";
import { FC } from "react";
import {
  StyledCustomLink,
  StyledHeading,
  StyledPara,
  StyledSpan,
  TextContainer,
  Wrapper,
} from "./Hero.style";


interface HeroProps {}

export const Hero: FC<HeroProps> = () => {
  return (
    <Wrapper>
      <TextContainer>
        <StyledSpan>New product</StyledSpan>
        <StyledHeading textLevel={"h1"}>XX99 Mark II Headphones</StyledHeading>
        <StyledPara textLevel={"p"}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </StyledPara>
        <StyledCustomLink href="">See product</StyledCustomLink>
      </TextContainer>
    </Wrapper>
  );
};
