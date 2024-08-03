import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    gap: 5rem;
  }
`;
