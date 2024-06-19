import { Banner } from "@/components/Banner/Banner";
import { styled } from "styled-components";

export const StyledHeading = styled(Banner)`
  font-size: ${(props) => props.theme.fontSizes.heading4.bigScreen};
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.palette.neutral.black};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem;
  background: transparent
  border-radius: 0.5rem;
  padding: 2rem 0rem;
  align-items: center;
  gap: 2rem;
  
`;

export const StyledPara = styled(Banner)`
  font-size: ${(props) => props.theme.fontSizes.overline.bigScreen};
  text-align: center;
  color: ${(props) => props.theme.palette.neutral.black};
  line-height: 25px;
  opacity: 80%;
`;

export const ImageWrapper = styled.div`
  display: flex;
  padding-bottom: 1rem;
  position: relative;
  height: 15rem;
  border-radius: 0.5rem;
  width: 100%;
`;
