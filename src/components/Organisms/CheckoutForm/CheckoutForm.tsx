'use client';
import { FC, useState } from 'react';
import {
  InfoWrapper,
  StyledButton,
  StyledForm,
  StyledFormContainer,
  StyledHeading,
  SummaryWrapper,
} from './CheckoutForm.style';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BillingForm } from '@/components/Molecules/BillingForm/BilllingForm';
import { ShippingForm } from '@/components/Molecules/ShippingForm/ShippingForm';
import { PaymentForm } from '@/components/Molecules/PaymentForm/PaymentForm';
import { CheckoutSummary } from '@/components/Molecules/CheckoutSummary/CheckoutSummary';
import { CheckoutModal } from '@/components/Molecules/CheckoutModal/CheckoutModal';

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
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<FormData>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log('form data:', data);
  };

  return (
    <StyledFormContainer>
      {isModalOpen && <CheckoutModal setModalOpen={setModalOpen} />}
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InfoWrapper>
          <StyledHeading textLevel="h4">Checkout</StyledHeading>
          <BillingForm register={register} errors={errors} />
          <ShippingForm register={register} errors={errors} />
          <PaymentForm register={register} errors={errors} />
        </InfoWrapper>
        <SummaryWrapper>
          <CheckoutSummary />
          <StyledButton type="submit" onClick={toggleModal} disabled={!isDirty || !isValid}>
            Continue and pay
          </StyledButton>
        </SummaryWrapper>
      </StyledForm>
    </StyledFormContainer>
  );
};
