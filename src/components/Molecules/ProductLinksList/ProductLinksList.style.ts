import { styled } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  padding: 3rem 0rem;
  gap: 4rem;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;
