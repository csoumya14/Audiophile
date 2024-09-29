'use client';
import { CheckoutForm } from '@/components/Organisms/CheckoutForm/CheckoutForm';
import { FC } from 'react';
import { Container } from './CheckoutTemplate.style';
import { GoBackButton } from '@/components/Atoms/GoBackButton/GoBackButton';

interface CheckoutTemplateProps {}

export const CheckoutTemplate: FC<CheckoutTemplateProps> = () => {
  return (
    <Container>
      <GoBackButton />
      <CheckoutForm />
    </Container>
  );
};
