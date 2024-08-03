import { Banner } from "@/components/Atoms/Banner/Banner";
import { CustomLink } from "@/components/Atoms/CustomLink/CustomLink";
import patternCircle from "../../../../public/images/home/desktop/pattern-circles.svg";
import { styled } from "styled-components";

export const StyledHeading = styled(Banner)`
  font-size: ${(props) => props.theme.fontSizes.heading1.mobile};
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.palette.neutral.white};
  width: 40%;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    font-size: ${(props) => props.theme.fontSizes.heading1.tablet};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem;
  background: ${(props) => props.theme.palette.primary.darkOrange};
  background-image: url(${patternCircle.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center -9rem;
  background-attachment: scroll;
  border-radius: 0.5rem;
  padding: 2rem 1rem;
  align-items: center;
  gap: 2.5rem;
  height: 35rem;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    height: 50rem;
    padding: 3rem 1rem;
  }
`;

export const StyledPara = styled(Banner)`
  font-size: ${(props) => props.theme.fontSizes.overline.mobile};
  text-align: center;
  color: ${(props) => props.theme.palette.primary.darkWhiteShade};
  line-height: ${(props) => props.theme.lineSpaces.overline.mobile};
  opacity: 80%;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    width: 60%;
  }
`;

export const StyledCustomLink = styled(CustomLink)`
  text-align: center;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.palette.neutral.black};
  color: ${(props) => props.theme.palette.neutral.white};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 1.5rem;
`;

export const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  width: 50%;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    width: 40%;
  }
`;
