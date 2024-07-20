import { styled } from "styled-components";
import Image from "next/image";
import { Banner } from "@/components/Atoms/Banner/Banner";
import { CustomLink } from "@/components/Atoms/CustomLink/CustomLink";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 1rem;
  gap: 1rem;
`;

export const StyledImage = styled(Image)``;

export const StyledHeading = styled(Banner)`
  text-transform: uppercase;
  width: 50%;
  text-align: center;
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
`;
export const StyledCustomLink = styled(CustomLink)`
  text-align: center;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.palette.primary.darkOrange};
  color: ${(props) => props.theme.palette.neutral.white};
  text-decoration: none;
  text-transform: uppercase;
`;
