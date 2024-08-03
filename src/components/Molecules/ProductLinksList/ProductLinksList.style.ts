import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;
  gap: 4rem;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0.3rem;
  }
`;
