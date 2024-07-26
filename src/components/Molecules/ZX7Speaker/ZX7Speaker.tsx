"use client";
import { FC } from "react";
import { StyledHeading, Container, StyledCustomLink } from "./ZX7Speaker.style";

interface ZX7SpeakerProps {}

export const ZX7Speaker: FC<ZX7SpeakerProps> = () => {
  return (
    <Container>
      <StyledHeading textLevel={"h3"}>ZX7 Speaker</StyledHeading>
      <StyledCustomLink href="/speakers/zx7-speaker">See product</StyledCustomLink>
    </Container>
  );
};
