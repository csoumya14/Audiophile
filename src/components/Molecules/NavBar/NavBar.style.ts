import styled from "styled-components";

export const StyledMenu = styled.nav<{ open: boolean }>`
  top: 5rem;
  left: 0rem;
  position: absolute;
  width: 100%;
  background-color: ${(props) => props.theme.palette.neutral.white};
  /* visibility: ${({ open }) => (open ? "visible" : "hidden")}; */
  z-index: 1001;
  transform: ${({ open }) => (open ? "translate(0)" : "translateY(-150%)")};
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
`;

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
