"use client";
import { FC } from "react";
import Image from "next/image";
import { StyledHeading, Container, StyledPara, StyledCustomLink } from "./ZX9Speaker.style";

interface ZX9SpeakerProps {}

export const ZX9Speaker: FC<ZX9SpeakerProps> = () => {
  return (
    <Container>
      <Image
        src="/images/home/mobile/image-speaker-zx9.png"
        width={150}
        height={200}
        alt="speakerZX9"
      />
      <StyledHeading textLevel={"h2"}>ZX9 Speaker</StyledHeading>
      <StyledPara textLevel="p">
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </StyledPara>
      <StyledCustomLink href="/speakers/zx9-speaker">See product</StyledCustomLink>
    </Container>
  );
};
