import { Banner } from "@/components/Atoms/Banner/Banner";
import { CustomLink } from "@/components/Atoms/CustomLink/CustomLink";
import { styled } from "styled-components";

export const StyledHeading = styled(Banner)`
  font-size: ${(props) => props.theme.fontSizes.heading2.mobile};
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.palette.neutral.black};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem;
  background: transparent;
  gap: 2rem;
  border-radius: 0.5rem;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    flex-direction: row;
    gap: 0.5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  gap: 1.5rem;
  background-color: ${(props) => props.theme.palette.primary.grey};
  padding: 2rem;
  position: relative;
  border-radius: 0.5rem;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    align-items: center;
    justify-content: center;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  padding-bottom: 1rem;
  position: relative;
  height: 15rem;
  border-radius: 0.5rem;
  & img {
    border-radius: 0.5rem;
  }
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    flex: 1;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const StyledCustomLink = styled(CustomLink)`
  text-align: center;
  padding: 1rem 2rem;
  background:transparent
  color: ${(props) => props.theme.palette.neutral.black};
  border: 2px solid black;
  text-decoration: none;
  text-transform: uppercase;
`;
