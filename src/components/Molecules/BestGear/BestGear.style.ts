import { Banner } from '@/components/Atoms/Banner/Banner';
import { styled } from 'styled-components';

export const StyledHeading = styled(Banner)`
  font-size: ${props => props.theme.fontSizes.heading2.mobile};
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.palette.neutral.black};
  & span {
    color: ${props => props.theme.palette.primary.darkOrange};
  }
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    font-size: ${props => props.theme.fontSizes.heading2.tablet};
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    text-align: left;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows:repeat(2,1fr);
  margin: 1rem 2rem;
  background: transparent
  border-radius: 0.5rem;
  padding: 2rem 0rem;
  align-items: center;
  height:50rem;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    height: 45rem; 
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    margin: 1rem 7rem;
    grid-template-rows:1fr;
    grid-template-columns:repeat(2,1fr);
    grid-template-areas: 
    "b a";
  }
  
`;

export const StyledPara = styled(Banner)`
  font-size: ${props => props.theme.fontSizes.overline.mobile};
  text-align: center;
  color: ${props => props.theme.palette.neutral.black};
  line-height: 25px;
  opacity: 80%;
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    text-align: left;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  & img {
    border-radius: 0.5rem;
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    grid-area: a;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem;
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    grid-area: b;
    align-items: flex-start;
    padding-left: 0;
  }
`;
