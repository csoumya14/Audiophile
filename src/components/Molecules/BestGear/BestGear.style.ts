import { Banner } from "@/components/Atoms/Banner/Banner";
import { styled } from "styled-components";

export const StyledHeading = styled(Banner)`
  font-size: ${(props) => props.theme.fontSizes.heading2.mobile};
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => props.theme.palette.neutral.black};
  & span {
    color: ${(props) => props.theme.palette.primary.darkOrange};
  }
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    font-size: ${(props) => props.theme.fontSizes.heading2.tablet};
  }
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
  height:50rem;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    height: 50rem; 
  }
  
`;

export const StyledPara = styled(Banner)`
  font-size: ${(props) => props.theme.fontSizes.overline.mobile};
  text-align: center;
  color: ${(props) => props.theme.palette.neutral.black};
  line-height: 25px;
  opacity: 80%;
`;

export const ImageWrapper = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  & img {
    border-radius: 0.5rem;
  }
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    width: 100%;
    height: 100%;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem;
`;
