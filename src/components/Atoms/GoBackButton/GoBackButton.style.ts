import { styled } from 'styled-components';
import { Button } from '../Button/Button';

export const StyledButton = styled(Button)`
  background: transparent;
  color: ${props => props.theme.palette.neutral.black};
  &:hover {
    color: ${props => props.theme.palette.primary.darkOrange};
  }
`;
