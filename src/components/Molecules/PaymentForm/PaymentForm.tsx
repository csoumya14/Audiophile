import { FC } from "react";
import { FieldSet } from "../FieldSet/FieldSet";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface PaymentFormProps {
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

const paymentFields = [
  // Add any additional fields if needed for payment, such as e-money details
  {
    id: "eMoneyNumber",
    label: "e-Money Number",
    placeholder: "238521993",
    type: "text",
  },
  {
    id: "eMoneyPin",
    label: "e-Money PIN",
    placeholder: "6891",
    type: "password",
  },
];

export const PaymentForm: FC<PaymentFormProps> = ({ register, errors }) => {
  return (
    <FieldSet
      legend="Payment Details"
      fields={paymentFields}
      register={register}
      errors={errors}
      includePaymentMethod
    />
  );
};
