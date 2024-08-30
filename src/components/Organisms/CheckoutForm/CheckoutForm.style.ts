import { Banner } from "@/components/Atoms/Banner/Banner";
import { Button } from "@/components/Atoms/Button/Button";
import { styled } from "styled-components";

export const StyledHeading = styled(Banner)`
  font-size: ${(props) => props.theme.fontSizes.heading5.mobile};
  text-transform: uppercase;
`;

export const StyledButton = styled(Button)`
  padding: 1rem;
  text-transform: uppercase;
`;

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 2rem;
  width: 100%;
`;

export const InfoWrapper = styled.div`
  background-color: ${(props) => props.theme.palette.neutral.white};
  border-radius: 5px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const SummaryWrapper = styled(InfoWrapper)``

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
