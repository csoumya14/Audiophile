import { Button } from "@/components/Atoms/Button/Button";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 10;
  padding: 1rem;
  background-color: ${(props) => props.theme.palette.neutral.black};
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    padding: 2rem;
  }
`;

export const StyledOpenCloseButton = styled(Button)`
  background: none;
  border: none;
  z-index: 999;
  @media (min-width: ${(props) => props.theme.mediaSize.lg}) {
    display: none;
  }
`;

export const Container = styled.div`
  flex-grow: 3;
  display: flex;
  justify-content: flex-end;
`;

export const CartButton = styled(Button)`
  background-color: transparent;
`;
