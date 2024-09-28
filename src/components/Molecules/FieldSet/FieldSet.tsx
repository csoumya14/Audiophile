import { FC } from 'react';
import { StyledFieldset, StyledInput, StyledLegend } from './FieldSet.style';
import { Field } from '@/components/Atoms/Forms/Field/Field';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

import { CheckBox } from '../Checkbox/Checkbox';

interface FieldConfig {
  id: string;
  label: string;
  placeholder?: string;
  type: string;
  validation?: object;
}

interface FieldSetProps {
  legend: string;
  fields: FieldConfig[];
  register: UseFormRegister<any>;
  errors: FieldErrors;
  includePaymentMethod?: boolean;
}
export const FieldSet: FC<FieldSetProps> = ({
  legend,
  fields,
  register,
  errors,
  includePaymentMethod,
}) => {
  return (
    <StyledFieldset>
      <StyledLegend>{legend}</StyledLegend>
      {includePaymentMethod && <CheckBox register={register} />}
      {fields.map(field => (
        <Field
          key={field.id}
          id={field.id}
          isAddress={field.id === 'address'}
          label={field.label}
          error={errors[field.id]}
        >
          <StyledInput
            {...register(field.id, field.validation)}
            type={field.type}
            error={!!errors[field.id]}
            placeholder={field.placeholder}
            id={field.id}
          />
        </Field>
      ))}
    </StyledFieldset>
  );
};
