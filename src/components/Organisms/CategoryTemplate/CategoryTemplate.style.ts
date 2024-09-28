import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 1rem 1rem 1rem;
  gap: 3rem;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    padding: 3rem 2rem 1rem 2rem;
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    padding: 5rem;
  }
`;
