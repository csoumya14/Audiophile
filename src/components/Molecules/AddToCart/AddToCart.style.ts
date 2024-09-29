import { Button } from '@/components/Atoms/Button/Button';
import { styled } from 'styled-components';

export const StyledAddToCartButton = styled(Button)`
  border-radius: 0px;
  padding: 0.5rem 1rem;
  &:hover {
    background: ${props => props.theme.palette.primary.lightOrange};
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
