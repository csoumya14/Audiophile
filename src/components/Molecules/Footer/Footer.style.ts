import { Banner } from '@/components/Atoms/Banner/Banner';
import { CustomLink } from '@/components/Atoms/CustomLink/CustomLink';
import styled from 'styled-components';
import { NavLinks } from '../NavLinks/NavLinks';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, auto);
  grid-template-areas:
    'a'
    ' b '
    'c '
    ' e '
    ' d ';

  width: 100%;
  justify-items: center;
  align-items: center;
  bottom: 0;
  z-index: 10;
  padding: 4rem 2rem;
  gap: 2rem;
  min-width: 100vw;
  background-color: ${props => props.theme.palette.neutral.black};
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    grid-template-columns: 1fr 1fr;
    justify-items: start;
    align-items: start;
    grid-template-areas:
      'a a'
      'b b'
      'c c'
      'e d';
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
      'a b'
      'c d'
      'e e';
    padding: 4rem 7rem;
  }
`;

export const StyledLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    flex-direction: row;
  }
`;

export const StyledCustomLink = styled(CustomLink)`
  text-align: center;
  padding: 1rem 2rem;
  color: ${props => props.theme.palette.neutral.white};
  text-decoration: none;
  text-transform: uppercase;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    padding-left: 0rem;
  }
`;

export const StyledBanner = styled(Banner)`
  color: ${props => props.theme.palette.primary.darkWhiteShade};
  opacity: 30%;
  text-align: center;
  grid-area: c;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    text-align: left;
  }
`;

export const StyledCopyrightBanner = styled(Banner)`
  color: ${props => props.theme.palette.primary.darkWhiteShade};
  opacity: 50%;
  grid-area: e;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    align-self: end;
  }
`;

export const StyledSocialLinksWrapper = styled.div`
  display: flex;
  grid-area: d;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    align-self: end;
    justify-self: end;
  }
`;

export const StyledSocialCustomLink = styled(CustomLink)`
  text-align: center;
  & svg {
    fill: ${props => props.theme.palette.neutral.white};
    &:hover {
      fill: ${props => props.theme.palette.primary.darkOrange};
    }
  }
`;

export const IconWrapper = styled.div`
  padding-left: 3rem;
  grid-area: a;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    padding-left: 0;
  }
`;

export const StyledNavLinks = styled(NavLinks)`
  grid-area: b;
  gap: 1rem;

  & li {
    text-align: center;
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    justify-self: end;
  }
`;
