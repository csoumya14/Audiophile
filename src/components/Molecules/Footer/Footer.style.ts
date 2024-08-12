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
  padding: 4rem 2rem;
  gap: 2rem;
  min-width: 100vw;
  background-color: ${(props) => props.theme.palette.neutral.black};
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    align-items: flex-start;
  }
`;

export const StyledLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    flex-direction: row;
  }
`;

export const StyledCustomLink = styled(CustomLink)`
  text-align: center;
  padding: 1rem 2rem;
  color: ${(props) => props.theme.palette.neutral.white};
  text-decoration: none;
  text-transform: uppercase;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    padding-left: 0rem;
  }
`;

export const StyledBanner = styled(Banner)`
  color: ${(props) => props.theme.palette.primary.darkWhiteShade};
  opacity: 30%;
  text-align: center;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    text-align: left;
  }
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

export const CopyrightLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: 100%;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
