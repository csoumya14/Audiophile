"use client";
import { FC } from "react";
import {
  StyledForm,
  StyledFormContainer,
  StyledHeading,
} from "./CheckoutForm.style";
import { SubmitHandler, useForm } from "react-hook-form";
import { BillingForm } from "@/components/Molecules/BillingForm/BilllingForm";
import { ShippingForm } from "@/components/Molecules/ShippingForm/ShippingForm";
import { PaymentForm } from "@/components/Molecules/PaymentForm/PaymentForm";

type FormData = {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  address: string;
  ZIPCode: string;
  city: string;
  country: string;
  paymentMethod: string;
  eMoneyNumber: number;
  eMoneyPin: number;
};

interface CheckOutFormProps {}
export const CheckoutForm: FC<CheckOutFormProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("form data:", data);
  };

  return (
    <StyledFormContainer>
      <StyledHeading textLevel="h2">Checkout</StyledHeading>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <BillingForm register={register} errors={errors} />
        <ShippingForm register={register} errors={errors} />
        <PaymentForm register={register} errors={errors} />
      </StyledForm>
    </StyledFormContainer>
  );
};
