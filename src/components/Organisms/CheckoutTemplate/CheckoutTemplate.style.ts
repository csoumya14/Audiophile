import { Button } from '@/components/Atoms/Button/Button';
import { styled } from 'styled-components';

export const StyledButton = styled(Button)`
  background: transparent;
  padding: 1rem;
  color: ${props => props.theme.palette.neutral.black};
  &:hover {
    color: ${props => props.theme.palette.primary.darkOrange};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  padding: 5rem 1rem;
  align-items: flex-start;
  background: ${props => props.theme.palette.primary.darkWhiteShade};
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    padding: 8rem 2rem 2rem 2rem;
  }
`;
