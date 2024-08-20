import styled from "styled-components";

export const StyledLabel = styled.label`
  color: ${(props) => props.theme.palette.neutral.black};
  font-size: 12px;
  font-weight: bold;
`;

export const StyledFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ErrorMessage = styled.small`
  color: ${(props) => props.theme.palette.primary.darkOrange};
  align-self: flex-start;
  width: 50%;
`;
