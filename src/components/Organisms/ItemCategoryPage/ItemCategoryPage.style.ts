import { styled } from "styled-components";
import Image from "next/image";
import { Banner } from "@/components/Atoms/Banner/Banner";
import { CustomLink } from "@/components/Atoms/CustomLink/CustomLink";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  gap: 1rem;
  height: 48rem;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    height: 48rem;
    padding: 1rem 2rem;
  }
`;

export const StyledImage = styled(Image)``;

export const StyledHeading = styled(Banner)`
  text-transform: uppercase;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.heading2.mobile};
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    width: 50%;
    font-size: ${(props) => props.theme.fontSizes.heading2.tablet};
  }
`;

export const StyledPara = styled(Banner)`
  color: ${(props) => props.theme.palette.neutral.black};
  font-size: ${(props) => props.theme.fontSizes.overline.mobile};
  text-align: center;
  line-height: 25px;
`;

export const StyledSpan = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.63rem;
  color: ${(props) => props.theme.palette.primary.darkOrange};
`;
export const StyledCustomLink = styled(CustomLink)`
  text-align: center;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.palette.primary.darkOrange};
  color: ${(props) => props.theme.palette.neutral.white};
  text-decoration: none;
  text-transform: uppercase;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 1rem;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    padding: 1rem 4rem;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  & img {
    border-radius: 0.5rem;
  }
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
  }
`;
