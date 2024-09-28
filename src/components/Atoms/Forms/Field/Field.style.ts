import styled from 'styled-components';

export const StyledLabel = styled.label<{ errorFound?: boolean }>`
  color: ${props => (props.errorFound ? 'red' : 'black')};
  font-size: 12px;
  font-weight: bold;
`;

export const StyledFieldWrapper = styled.div<{ isAddress?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    grid-column: ${props => (props.isAddress ? 'span 2' : 'span 1')};
  }
`;

export const ErrorMessage = styled.small`
  color: ${props => props.theme.palette.primary.red};
`;

export const LabelErrorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
