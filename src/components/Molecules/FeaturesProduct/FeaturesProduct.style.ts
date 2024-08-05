import { Banner } from "@/components/Atoms/Banner/Banner";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledHeading = styled(Banner)`
  text-transform: uppercase;
  width: 50%;
  font-size: ${(props) => props.theme.fontSizes.heading3.mobile};
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    font-size: ${(props) => props.theme.fontSizes.heading3.tablet};
  }
`;

export const StyledPara = styled(Banner)`
  color: ${(props) => props.theme.palette.neutral.black};
  line-height: 25px;
`;
