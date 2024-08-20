import { FC } from "react";
import { StyledFieldset, StyledInput, StyledLegend } from "./FieldSet.style";
import { Field } from "@/components/Atoms/Forms/Field/Field";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface FieldConfig {
  id: string;
  label: string;
  placeholder: string;
  type: string;
}

interface FieldSetProps {
  legend: string;
  fields: FieldConfig[];
  register: UseFormRegister<any>;
  errors: FieldErrors;
}
export const FieldSet: FC<FieldSetProps> = ({
  legend,
  fields,
  register,
  errors,
}) => {
  return (
    <StyledFieldset>
      <StyledLegend>{legend}</StyledLegend>
      {fields.map((field) => (
        <Field
          key={field.id}
          id={field.id}
          label={field.label}
          error={errors[field.id]}
        >
          <StyledInput
            {...register(field.id)}
            type={field.type}
            placeholder={field.placeholder}
            id={field.id}
          />
        </Field>
      ))}
    </StyledFieldset>
  );
};
