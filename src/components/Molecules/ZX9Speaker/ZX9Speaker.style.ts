import { Banner } from '@/components/Atoms/Banner/Banner';
import { CustomLink } from '@/components/Atoms/CustomLink/CustomLink';
import patternCircle from '../../../../public/images/home/desktop/pattern-circles.svg';
import { styled } from 'styled-components';

export const StyledHeading = styled(Banner)`
  font-size: ${props => props.theme.fontSizes.heading1.mobile};
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.palette.neutral.white};
  width: 40%;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    font-size: ${props => props.theme.fontSizes.heading1.tablet};
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    text-align: left;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  background: ${props => props.theme.palette.primary.darkOrange};
  background-image: url(${patternCircle.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center -9rem;
  background-attachment: scroll;
  border-radius: 0.5rem;
  padding: 2rem 1rem;
  height: auto;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    padding: 3rem 1rem;
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    grid-template-columns: 1fr 0.8fr;
    padding: 3rem 1rem 0rem 1rem;
    grid-template-rows: 1fr;
  }
`;

export const StyledPara = styled(Banner)`
  font-size: ${props => props.theme.fontSizes.overline.mobile};
  text-align: center;
  color: ${props => props.theme.palette.primary.darkWhiteShade};
  line-height: ${props => props.theme.lineSpaces.overline.mobile};
  opacity: 80%;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    width: 60%;
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    text-align: left;
  }
`;

export const StyledCustomLink = styled(CustomLink)`
  text-align: center;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.palette.neutral.black};
  color: ${props => props.theme.palette.neutral.white};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  &:hover {
    background-color: ${props => props.theme.palette.primary.grey};
    color: ${props => props.theme.palette.neutral.black};
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    align-self: end;
    height: 90%;
    padding: 0rem 1rem 5rem 0rem;
    align-items: flex-start;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 70%;
  height: 100%;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    width: 30%;
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    width: 60%;
    align-self: end;
  }
`;
