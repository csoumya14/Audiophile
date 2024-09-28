"use client";
import { CheckoutForm } from "@/components/Organisms/CheckoutForm/CheckoutForm";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { Container, StyledButton } from "./CheckoutTemplate.style";

interface CheckoutTemplateProps{}

export const CheckoutTemplate: FC<CheckoutTemplateProps> =()=>  {
  const router = useRouter();
  return (
    <Container>
      <StyledButton onClick={() => router.back()} type="button">
        Go Back
      </StyledButton>
      <CheckoutForm />
    </Container>
  );
}
