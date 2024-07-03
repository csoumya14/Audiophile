import { Banner } from "@/components/Banner/Banner";
import { styled } from "styled-components";

export const StyledHeading = styled(Banner)`
  color: ${(props) => props.theme.palette.neutral.white};
  text-transform: uppercase;
`;

export const Wrapper = styled.div`
  background: ${(props) => props.theme.palette.neutral.black};
  height: 5rem;
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;
