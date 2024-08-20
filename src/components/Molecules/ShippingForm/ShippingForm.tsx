import { FC } from "react";
import { FieldSet } from "../FieldSet/FieldSet";
import { useForm } from "react-hook-form";

const shippingFields = [
  {
    id: "address",
    label: "Your Address",
    placeholder: "1137 Williams Avenue",
    type: "text",
  },
  { id: "zipCode", label: "ZIP Code", placeholder: "10001", type: "text" },
  { id: "city", label: "City", placeholder: "New York", type: "text" },
  {
    id: "country",
    label: "Country",
    placeholder: "United States",
    type: "text",
  },
];

interface ShippingFormProps {}
export const ShippingForm: FC<ShippingFormProps> = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <>
      <FieldSet
        legend="Shipping Details"
        fields={shippingFields}
        register={register}
        errors={errors}
      />
    </>
  );
};
