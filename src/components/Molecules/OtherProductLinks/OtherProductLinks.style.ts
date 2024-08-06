import { Banner } from "@/components/Atoms/Banner/Banner";
import { CustomLink } from "@/components/Atoms/CustomLink/CustomLink";
import { styled } from "styled-components";

export const Container = styled.div``;

export const StyledCustomLink = styled(CustomLink)`
  text-align: center;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.palette.primary.darkOrange};
  color: ${(props) => props.theme.palette.neutral.white};
  text-decoration: none;
  text-transform: uppercase;
  align-self: center;
`;

export const StyledHeading = styled(Banner)`
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.palette.neutral.black};
`;

export const StyledList = styled.li`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  padding-bottom: 1rem;
  position: relative;
  height: 15rem;
  border-radius: 0.5rem;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    height: 20rem;
  }
`;
