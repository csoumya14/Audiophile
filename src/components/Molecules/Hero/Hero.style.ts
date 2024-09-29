import styled from 'styled-components';
import { Banner } from '../../Atoms/Banner/Banner';
import { CustomLink } from '../../Atoms/CustomLink/CustomLink';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100vw;
  align-items: center;
  justify-items: center;
  border: 1px solid red;
  background-color: ${props => props.theme.palette.primary.lightBlack};
  min-height: 80vh;
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    grid-template-columns: 0.5fr 1fr;
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem @media (min-width: ${props => props.theme.mediaSize.md}) {
    gap: 1.5rem;
    padding: 2rem;
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    position: static;
    padding: 5rem;
    align-items: flex-start;
  }
`;

export const StyledHeading = styled(Banner)`
  font-size: ${props => props.theme.fontSizes.heading1.mobile};
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.palette.neutral.white};
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    font-size: ${props => props.theme.fontSizes.heading1.tablet};
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    text-align: left;
  }
`;

export const StyledPara = styled(Banner)`
  font-size: ${props => props.theme.fontSizes.overline.mobile};
  text-align: center;
  color: ${props => props.theme.palette.primary.darkWhiteShade};
  line-height: 25px;
  opacity: 80%;
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    text-align: left;
  }
`;

export const StyledSpan = styled.span`
  color: ${props => props.theme.palette.primary.grey};
  opacity: 50%;
  letter-spacing: 10px;
  text-transform: uppercase;
  text-align: center;
`;

export const StyledCustomLink = styled(CustomLink)`
  text-align: center;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.palette.primary.darkOrange};
  color: ${props => props.theme.palette.neutral.white};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  &:hover {
    background-color: ${props => props.theme.palette.primary.lightOrange};
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
