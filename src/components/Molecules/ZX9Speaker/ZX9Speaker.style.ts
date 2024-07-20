import { Banner } from "@/components/Atoms/Banner/Banner";
import { CustomLink } from "@/components/Atoms/CustomLink/CustomLink";
import patternCircle from "../../../../public/images/home/desktop/pattern-circles.svg";
import { styled } from "styled-components";

export const StyledHeading = styled(Banner)`
  font-size: ${(props) => props.theme.fontSizes.heading2.bigScreen};
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.palette.neutral.white};
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
  gap: 2rem;
`;

export const StyledPara = styled(Banner)`
  font-size: ${(props) => props.theme.fontSizes.overline.bigScreen};
  text-align: center;
  color: ${(props) => props.theme.palette.primary.darkWhiteShade};
  line-height: 25px;
  opacity: 80%;
`;

export const StyledCustomLink = styled(CustomLink)`
  text-align: center;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.palette.neutral.black};
  color: ${(props) => props.theme.palette.neutral.white};
  text-decoration: none;
  text-transform: uppercase;
`;
