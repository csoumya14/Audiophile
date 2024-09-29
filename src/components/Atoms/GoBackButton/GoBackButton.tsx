import { FC } from 'react';
import { StyledButton } from './GoBackButton.style';
import { useRouter } from 'next/navigation';

interface GoBackButtonProps {}
export const GoBackButton: FC<GoBackButtonProps> = () => {
  const router = useRouter();
  return (
    <StyledButton onClick={() => router.back()} type="button">
      Go Back
    </StyledButton>
  );
};
