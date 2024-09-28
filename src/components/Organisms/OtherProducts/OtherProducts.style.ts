import { Banner } from '@/components/Atoms/Banner/Banner';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  gap: 1rem;
`;

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    flex-direction: row;
  }
`;

export const StyledHeading = styled(Banner)`
  text-transform: uppercase;
  justify-self: center;
  font-size: ${props => props.theme.fontSizes.heading3.mobile};
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    font-size: ${props => props.theme.fontSizes.heading3.tablet};
  }
`;
