import { Banner } from "@/components/Atoms/Banner/Banner";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const StyledHeading = styled(Banner)`
  font-size: ${(props) => props.theme.fontSizes.heading5.mobile};
  text-transform: uppercase;
`;

export const AmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
