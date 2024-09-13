import React, { FC, ReactNode } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { StyledLabel, StyledFieldWrapper, ErrorMessage } from './Field.style';

interface FieldProps {
  children?: ReactNode;
  id: string;
  label: string;
  isAddress: boolean;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export const Field: FC<FieldProps> = ({ children, isAddress, label, error, id }) => {
  return (
    <StyledFieldWrapper isAddress={isAddress}>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      {children}
      {error && <ErrorMessage>{error.message?.toString()}</ErrorMessage>}
    </StyledFieldWrapper>
  );
};
