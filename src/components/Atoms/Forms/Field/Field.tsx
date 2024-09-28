import React, { FC, ReactNode } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import { StyledLabel, StyledFieldWrapper, ErrorMessage, LabelErrorWrapper } from './Field.style';

interface FieldProps {
  children?: ReactNode;
  id: string;
  label: string;
  isAddress: boolean;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

export const Field: FC<FieldProps> = ({ children, isAddress, label, error, id }) => {
  const errorFound = !!error;
  return (
    <StyledFieldWrapper isAddress={isAddress}>
      <LabelErrorWrapper>
        <StyledLabel htmlFor={id} errorFound={errorFound}>
          {label}
        </StyledLabel>
        {error && <ErrorMessage>{error.message?.toString()}</ErrorMessage>}
      </LabelErrorWrapper>
      {children}
    </StyledFieldWrapper>
  );
};
