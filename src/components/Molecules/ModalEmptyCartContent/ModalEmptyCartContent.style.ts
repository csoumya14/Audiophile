import { Banner } from "@/components/Atoms/Banner/Banner";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
`;

export const StyledHeading = styled(Banner)`
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSizes.heading5.mobile};
`;
