import { Banner } from "@/components/Atoms/Banner/Banner";
import { styled } from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    flex-direction: row;
  }
`;

export const StyledHeading = styled(Banner)`
  text-transform: uppercase;
  align-self: center;
  font-size: ${(props) => props.theme.fontSizes.heading3.mobile};
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    font-size: ${(props) => props.theme.fontSizes.heading3.tablet};
  }
`;
