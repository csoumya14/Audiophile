import { Banner } from "@/components/Atoms/Banner/Banner";
import { CustomLink } from "@/components/Atoms/CustomLink/CustomLink";
import { styled } from "styled-components";

export const StyledHeading = styled(Banner)`
  text-transform: uppercase;
  width: 50%;
`;

export const StyledPara = styled(Banner)`
  color: ${(props) => props.theme.palette.neutral.black};
  line-height: 25px;
`;

export const StyledSpan = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.63rem;
  color: ${(props) => props.theme.palette.primary.darkOrange};
`;

export const StyledPrice = styled.span`
  color: ${(props) => props.theme.palette.neutral.black};
  font-weight: bold;
`;
export const StyledCustomLink = styled(CustomLink)`
  text-align: center;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.palette.primary.darkOrange};
  color: ${(props) => props.theme.palette.neutral.white};
  text-decoration: none;
  text-transform: uppercase;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    flex-direction: row;
    gap: 3rem;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  padding-bottom: 1rem;
  position: relative;
  border-radius: 0.5rem;
  height: 20rem;
  & img {
    border-radius: 0.5rem;
  }
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    flex: 1;
    max-width: 100%;
    max-height: 100%;
    height: auto;
  }
`;
