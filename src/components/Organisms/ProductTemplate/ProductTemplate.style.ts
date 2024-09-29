import { Button } from '@/components/Atoms/Button/Button';
import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  padding: 6rem 1rem 1rem 1rem;
  gap: 3rem;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    padding: 8rem 2rem 1rem 2rem;
  }
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    padding: 8rem 5rem 1rem 5rem;
  }
`;

export const StyledButton = styled(Button)`
  background: transparent;
  color: ${props => props.theme.palette.neutral.black};
  &:hover {
    color: ${props => props.theme.palette.primary.darkOrange};
  }
`;
