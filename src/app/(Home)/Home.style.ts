import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  gap: 3rem;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    padding: 2rem;
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    padding: 5rem;
  }
`;
