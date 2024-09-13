import { Input } from '@/components/Atoms/Forms/Input/Input';

import { styled } from 'styled-components';

export const StyledInput = styled(Input)`
  border: 1px solid;
  border-color: ${props => props.theme.palette.primary.grey};
  border-radius: 5px;
  padding: 1rem;
`;

export const StyledFieldset = styled.fieldset`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* One column */
  padding: 10px;
  padding-top: 1rem;
  gap: 1rem;
  border: none;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    grid-template-columns: repeat(2, 1fr); /* Two columns */
  }
`;

export const StyledLegend = styled.legend`
  color: ${props => props.theme.palette.primary.darkOrange};
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSizes.subTitle.mobile};
`;
