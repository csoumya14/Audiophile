import { Input } from "@/components/Atoms/Forms/Input/Input";

import { styled } from "styled-components";

export const StyledInput = styled(Input)`
  border: 1px solid;
  border-color: ${(props) => props.theme.palette.primary.grey};
  border-radius: 5px;
  padding: 1rem;
`;

export const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  gap: 1rem;
  border: none;
`;

export const StyledLegend = styled.legend`
  color: ${(props) => props.theme.palette.primary.darkOrange};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSizes.subTitle.mobile};
`;
