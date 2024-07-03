import { styled } from "styled-components";
import Image from "next/image";
import { Banner } from "@/components/Banner/Banner";
import { CustomLink } from "@/components/CustomLink/CustomLink";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledImage = styled(Image)`
  position: absolute;
  transform: translate(0%, -50%);
`;

export const StyledHeading = styled(Banner)`
  text-transform: uppercase;
`;

export const StyledPara = styled(Banner)`
  color: ${(props) => props.theme.palette.neutral.black};
`;

export const StyledSpan = styled.span`
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.primary.darkOrange};
`;
export const StyledCustomLink = styled(CustomLink)`
  text-align: center;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.palette.primary.darkOrange};
  color: ${(props) => props.theme.palette.neutral.white};
  text-decoration: none;
  text-transform: uppercase;
`;
