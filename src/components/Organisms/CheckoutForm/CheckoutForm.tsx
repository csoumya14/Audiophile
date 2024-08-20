"use client";
import { FC } from "react";
import {
  StyledForm,
  StyledFormContainer,
  StyledHeading,
} from "./CheckoutForm.style";
import { useForm } from "react-hook-form";
import { BillingForm } from "@/components/Molecules/BillingForm/BilllingForm";
import { ShippingForm } from "@/components/Molecules/ShippingForm/ShippingForm";

type Inputs = {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  address: string;
  ZIPCode: string;
  city: string;
  country: string;
  eMoneyNumber: number;
  eMoneyPin: number;
};

interface CheckOutFormProps {}
export const CheckoutForm: FC<CheckOutFormProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: "onBlur",
  });

  const mySubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!isValid) return;
    handleSubmit(() => {
      console.log("submited");
    })(e);
  };

  return (
    <StyledFormContainer>
      <StyledHeading textLevel="h2">Checkout</StyledHeading>
      <StyledForm>
        <BillingForm />
        <ShippingForm />
      </StyledForm>
    </StyledFormContainer>
  );
};
