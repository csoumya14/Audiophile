import { FC, useState } from 'react';
import {
  CheckBoxContainer,
  StyledLabel,
  StyledOptionWrapper,
  StyledRadioInput,
  StyledText,
  Wrapper,
} from './Checkbox.style';
import { Input } from '../../Atoms/Forms/Input/Input';
import { UseFormRegister } from 'react-hook-form';

interface CheckBoxProps {
  register: UseFormRegister<any>;
}
export const CheckBox: FC<CheckBoxProps> = ({ register }) => {
  const [selectedMethod, setSelectedMethod] = useState<string>('e-money');

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMethod(event.target.value);
  };
  return (
    <CheckBoxContainer>
      <StyledText textLevel="p">Payment Method</StyledText>
      <Wrapper>
        <StyledOptionWrapper selected={selectedMethod === 'e-money'}>
          <StyledLabel>
            <StyledRadioInput
              selected={selectedMethod === 'e-money'}
              type="radio"
              value="e-money"
              checked={selectedMethod === 'e-money'}
              {...register('paymentMethod')}
              onChange={handleCheckboxChange}
            />
            e-Money
          </StyledLabel>
        </StyledOptionWrapper>
        <StyledOptionWrapper selected={selectedMethod === 'cash-on-delivery'}>
          <StyledLabel>
            <StyledRadioInput
              selected={selectedMethod === 'cash-on-delivery'}
              type="radio"
              checked={selectedMethod === 'cash-on-delivery'}
              value="cash-on-delivery"
              {...register('paymentMethod')}
              onChange={handleCheckboxChange}
            />
            Cash on Delivery
          </StyledLabel>
        </StyledOptionWrapper>
      </Wrapper>
    </CheckBoxContainer>
  );
};
