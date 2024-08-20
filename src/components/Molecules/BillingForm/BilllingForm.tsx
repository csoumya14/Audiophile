import { FC } from "react";
import { FieldSet } from "../FieldSet/FieldSet";
import { useForm } from "react-hook-form";

interface BillingFormProps {}
const billingFields = [
  { id: "name", label: "Name", placeholder: "Alexei Ward", type: "text" },
  {
    id: "emailAddress",
    label: "Email Address",
    placeholder: "alexei@gmail.com",
    type: "email",
  },
  {
    id: "phoneNumber",
    label: "Phone Number",
    placeholder: "+1202-555-0136",
    type: "tel",
  },
];

export const BillingForm: FC<BillingFormProps> = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <>
      <FieldSet
        legend="Billing Details"
        fields={billingFields}
        register={register}
        errors={errors}
      />
    </>
  );
};
