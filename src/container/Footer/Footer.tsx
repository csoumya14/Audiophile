"use client";
import { FC } from "react";
import { AudioPhileText } from "../../components/SVGS/AudioPhileText/AudioPhileText";
import {
  StyledCustomLink,
  StyledLinkContainer,
  Wrapper,
  StyledBanner,
  StyledCopyrightBanner,
  StyledSocialLinksWrapper,
  StyledSocialCustomLink,
} from "./Footer.style";
import { links } from "@/utils/Links/links";
import { FacebookIcon } from "@/components/SVGS/FacebookIcon/FacebookIcon";
import { Twinkle_Star } from "next/font/google";
import { TwitterIcon } from "@/components/SVGS/TwitterIcon/TwitterIcon";
import { InstagramIcon } from "@/components/SVGS/InstagramIcon/InstagramIcon";

interface FooterProps {}

const iconComponentsList = [
  { id: 1, url: "/", component: <FacebookIcon /> },
  { id: 2, url: "/", component: <TwitterIcon /> },
  { id: 3, url: "/", component: <InstagramIcon /> },
];

export const Footer: FC<FooterProps> = () => {
  return (
    <Wrapper>
      <AudioPhileText />
      <StyledLinkContainer>
        {links.map((link) => (
          <StyledCustomLink key={link.id} href={link.url}>
            {link.text}
          </StyledCustomLink>
        ))}
      </StyledLinkContainer>
      <StyledBanner textLevel={"p"}>
        Audiophile is an all in one stop to fulfill your audio needs. We are a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we are open 7 days a week.
      </StyledBanner>
      <StyledCopyrightBanner textLevel="p">
        Copyright 2021. All Rights Reserved
      </StyledCopyrightBanner>
      <StyledSocialLinksWrapper>
        {iconComponentsList.map((link) => (
          <StyledSocialCustomLink key={link.id} href={link.url}>
            {link.component}
          </StyledSocialCustomLink>
        ))}
      </StyledSocialLinksWrapper>
    </Wrapper>
  );
};
