import { FC } from "react";
import { FieldSet } from "../FieldSet/FieldSet";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface BillingFormProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
}
const billingFields = [
  {
    id: "name",
    label: "Name",
    placeholder: "Alexei Ward",
    type: "text",
    validation: {
      required: "Name is required",
      minLength: {
        value: 3, // Minimum length of 3 characters
        message: "Name must be at least 3 characters long",
      },
    },
  },
  {
    id: "emailAddress",
    label: "Email Address",
    placeholder: "alexei@gmail.com",
    type: "email",
    validation: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email address",
      },
    },
  },
  {
    id: "phoneNumber",
    label: "Phone Number",
    placeholder: "+1202-555-0136",
    type: "tel",
    validation: { required: "Phone number is required" },
  },
];

export const BillingForm: FC<BillingFormProps> = ({ register, errors }) => {
  return (
    <FieldSet
      legend="Billing Details"
      fields={billingFields}
      register={register}
      errors={errors}
    />
  );
};
