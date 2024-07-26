import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;
  gap: 4rem;
`;

export const StyledProductBox = styled.div`
  background-color: ${(props) => props.theme.palette.primary.darkOrange};
`;
