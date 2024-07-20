import { Banner } from "@/components/Atoms/Banner/Banner";
import { CustomLink } from "@/components/Atoms/CustomLink/CustomLink";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  z-index: 10;
  padding: 2rem 2rem;
  gap: 2rem;
  background-color: ${(props) => props.theme.palette.neutral.black};
`;

export const StyledLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const StyledCustomLink = styled(CustomLink)`
  text-align: center;
  padding: 1rem 2rem;
  color: ${(props) => props.theme.palette.neutral.white};
  text-decoration: none;
  text-transform: uppercase;
`;

export const StyledBanner = styled(Banner)`
  color: ${(props) => props.theme.palette.primary.darkWhiteShade};
  opacity: 20%;
  text-align: center;
`;

export const StyledCopyrightBanner = styled(Banner)`
  color: ${(props) => props.theme.palette.primary.darkWhiteShade};
  opacity: 50%;
`;

export const StyledSocialLinksWrapper = styled.div`
  display: flex;
`;

export const StyledSocialCustomLink = styled(CustomLink)`
  text-align: center;
`;
