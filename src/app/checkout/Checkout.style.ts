import { Button } from "@/components/Atoms/Button/Button";
import { styled } from "styled-components";

export const StyledButton = styled(Button)`
  background: transparent;
  padding: 1rem;
  color: ${(props) => props.theme.palette.neutral.black};
`;