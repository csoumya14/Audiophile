import { Banner } from "@/components/Atoms/Banner/Banner";
import { Button } from "@/components/Atoms/Button/Button";
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledHeading = styled(Banner)`
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSizes.heading5.mobile};
`;

export const StyledRemoveButton = styled(Button)`
  background: transparent;
  color: ${(props) => props.theme.palette.neutral.black};
  text-decoration: underline;
`;

export const StyledCheckoutButton = styled(Button)`
  text-transform: uppercase;
  border-radius: 0px;
  padding: 0.5rem;
  letter-spacing: 0.5px;
`;
