import { Banner } from "@/components/Atoms/Banner/Banner";
import { Button } from "@/components/Atoms/Button/Button";
import { CustomLink } from "@/components/Atoms/CustomLink/CustomLink";
import { styled } from "styled-components";

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  zindex: 999;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.palette.neutral.white};
  padding: 1rem;
  zindex: 1000;
  border-radius: 10px;
  width: 90%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledCustomLink = styled(CustomLink)`
  text-align: center;
  padding: 0.5rem;
  background-color: ${(props) => props.theme.palette.primary.darkOrange};
  color: ${(props) => props.theme.palette.neutral.white};
  text-decoration: none;
  text-transform: uppercase;
`;

export const StyledHeading = styled(Banner)`
  font-size: ${(props) => props.theme.fontSizes.heading3.mobile};
  text-transform: uppercase;
`;
