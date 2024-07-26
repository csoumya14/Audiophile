import { Button } from "@/components/Atoms/Button/Button";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 10;
  padding: 1rem 1rem;
  background-color: ${(props) => props.theme.palette.neutral.black};
`;

export const StyledOpenCloseButton = styled(Button)`
  background: none;
  border: none;
  z-index: 999;
  @media (min-width: ${(props) => props.theme.mediaSize.s}) {
    display: none;
  }
`;
