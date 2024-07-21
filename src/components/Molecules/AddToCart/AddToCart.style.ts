import { Button } from "@/components/Atoms/Button/Button";
import { styled } from "styled-components";

export const QuantityContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  background: ${(props) => props.theme.palette.primary.grey};
  padding: 0.5rem 1rem;
`;

export const StyledButton = styled(Button)`
  background: transparent;
  color: ${(props) => props.theme.palette.neutral.black};
`;

export const StyledAddToCartButton = styled(Button)`
  border-radius: 0px;
  padding: 0.5rem 1rem;
`;

export const StyledContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
