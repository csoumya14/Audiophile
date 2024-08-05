import styled from "styled-components";
import mobileHero from "../../../../public/images/home/mobile/image-header.jpg";
import tabletHero from "../../../../public/images/home/tablet/image-header.jpg";
import { Banner } from "../../Atoms/Banner/Banner";
import { CustomLink } from "../../Atoms/CustomLink/CustomLink";

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  padding: 1rem 1rem;
  align-items: center;
  background-color: ${(props) => props.theme.palette.neutral.black};
  background-image: url(${mobileHero.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-width: 100vw;
  min-height: 100vh;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    background-image: url(${tabletHero.src});
    background-size: contain;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    padding: 10rem;
    gap: 1.5rem;
  }
`;

export const StyledHeading = styled(Banner)`
  font-size: ${(props) => props.theme.fontSizes.heading1.mobile};
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.palette.neutral.white};
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    font-size: ${(props) => props.theme.fontSizes.heading1.tablet};
  }
`;

export const StyledPara = styled(Banner)`
  font-size: ${(props) => props.theme.fontSizes.overline.mobile};
  text-align: center;
  color: ${(props) => props.theme.palette.primary.darkWhiteShade};
  line-height: 25px;
  opacity: 80%;
`;

export const StyledSpan = styled.span`
  color: ${(props) => props.theme.palette.primary.grey};
  opacity: 50%;
  letter-spacing: 10px;
  text-transform: uppercase;
  text-align: center;
`;

export const StyledCustomLink = styled(CustomLink)`
  text-align: center;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.palette.primary.darkOrange};
  color: ${(props) => props.theme.palette.neutral.white};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
