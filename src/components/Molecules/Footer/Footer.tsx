'use client';
import { FC } from 'react';
import {
  Wrapper,
  StyledBanner,
  StyledCopyrightBanner,
  StyledSocialLinksWrapper,
  StyledSocialCustomLink,
  IconWrapper,
  StyledNavLinks,
} from './Footer.style';
import { FacebookIcon } from '@/components/Atoms/SVGs/FacebookIcon/FacebookIcon';
import { TwitterIcon } from '@/components/Atoms/SVGs/TwitterIcon/TwitterIcon';
import { InstagramIcon } from '@/components/Atoms/SVGs/InstagramIcon/InstagramIcon';
import { AudioPhileText } from '@/components/Atoms/SVGs/AudioPhileText/AudioPhileText';
import { NavLinks } from '../NavLinks/NavLinks';

interface FooterProps {}

const iconComponentsList = [
  { id: 1, url: '/', component: <FacebookIcon /> },
  { id: 2, url: '/', component: <TwitterIcon /> },
  { id: 3, url: '/', component: <InstagramIcon /> },
];

export const Footer: FC<FooterProps> = () => {
  return (
    <Wrapper>
      <IconWrapper>
        <AudioPhileText />
      </IconWrapper>
      <StyledNavLinks />
      <StyledBanner textLevel={'p'}>
        Audiophile is an all in one stop to fulfill your audio needs. We are a small team of music
        lovers and sound specialists who are devoted to helping you get the most out of personal
        audio. Come and visit our demo facility - we are open 7 days a week.
      </StyledBanner>
      <StyledSocialLinksWrapper>
        {iconComponentsList.map(link => (
          <StyledSocialCustomLink key={link.id} href={link.url}>
            {link.component}
          </StyledSocialCustomLink>
        ))}
      </StyledSocialLinksWrapper>

      <StyledCopyrightBanner textLevel="p">
        Copyright 2021. All Rights Reserved
      </StyledCopyrightBanner>
    </Wrapper>
  );
};
