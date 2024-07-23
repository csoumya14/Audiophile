import { Banner } from "@/components/Atoms/Banner/Banner";
import { styled } from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

export const StyledHeading = styled(Banner)`
  text-transform: uppercase;
  width: 50%;
  align-self: center;
`;
