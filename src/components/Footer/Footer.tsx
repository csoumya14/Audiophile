"use client";
import { FC } from "react";
import { AudioPhileText } from "../SVGS/AudioPhileText/AudioPhileText";
import { Wrapper } from "./Footer.style";

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <Wrapper>
      
      <AudioPhileText />
      
    </Wrapper>
  );
};
