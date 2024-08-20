import { Banner } from "@/components/Atoms/Banner/Banner";
import { Button } from "@/components/Atoms/Button/Button";
import { Input } from "@/components/Atoms/Forms/Input/Input";
import { FieldError } from "react-hook-form";
import { styled } from "styled-components";

export const StyledHeading = styled(Banner)`
  font-size: ${(props) => props.theme.fontSizes.heading5.mobile};
  text-transform: uppercase;
`;

export const StyledButton = styled(Button)`
  background: transparent;
  padding: 1rem;
  color: ${(props) => props.theme.palette.neutral.black};
`;

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 2rem;
  width: 100%;
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
