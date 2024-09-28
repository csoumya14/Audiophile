import { styled } from 'styled-components';
import { Banner } from '@/components/Atoms/Banner/Banner';
import { CustomLink } from '@/components/Atoms/CustomLink/CustomLink';

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 1rem;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    padding: 1rem 4rem;
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    align-items: flex-start;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  & img {
    border-radius: 0.5rem;
  }
`;

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  gap: 1rem;
  height: auto;
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;

    &:nth-child(odd) {
      grid-template-areas: 'image text';
    }

    & ${ImageWrapper}:nth-child(odd) {
      grid-area: image;
    }

    & ${TextWrapper}:nth-child(odd) {
      grid-area: text;
    }

    &:nth-child(even) {
      grid-template-areas: 'text image';
    }

    & ${ImageWrapper}:nth-child(even) {
      grid-area: image;
    }

    & ${TextWrapper}:nth-child(even) {
      grid-area: text;
    }
  }
`;

export const StyledHeading = styled(Banner)`
  text-transform: uppercase;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.heading2.mobile};
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    width: 50%;
    font-size: ${props => props.theme.fontSizes.heading2.tablet};
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    text-align: left;
    width: 100%;
  }
`;

export const StyledPara = styled(Banner)`
  color: ${props => props.theme.palette.neutral.black};
  font-size: ${props => props.theme.fontSizes.overline.mobile};
  text-align: center;
  line-height: 25px;
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    text-align: left;
  }
`;

export const StyledSpan = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.63rem;
  color: ${props => props.theme.palette.primary.darkOrange};
`;
export const StyledCustomLink = styled(CustomLink)`
  text-align: center;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.palette.primary.darkOrange};
  color: ${props => props.theme.palette.neutral.white};
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    background-color: ${props => props.theme.palette.primary.lightOrange};
  }
`;
