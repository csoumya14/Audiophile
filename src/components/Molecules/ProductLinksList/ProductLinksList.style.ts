import { styled } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 3rem 2rem;
  gap: 4rem;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 3rem 7rem;
  }
`;
