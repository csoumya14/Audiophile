import { Button } from "@/components/Atoms/Button/Button";
import { styled } from "styled-components";

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: ${(props) => props.theme.palette.primary.grey};
  padding: 0.5rem 1rem;
`;

export const StyledButton = styled(Button)`
  background: transparent;
  color: ${(props) => props.theme.palette.neutral.black};
`;
