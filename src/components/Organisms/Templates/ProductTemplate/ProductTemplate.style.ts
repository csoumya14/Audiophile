import { Button } from "@/components/Atoms/Button/Button";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5rem 2rem;
  align-items: flex-start;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    padding-top: 8rem;
  }
`;

export const StyledButton = styled(Button)`
  background: transparent;
  padding: 1rem;
  color: ${(props) => props.theme.palette.neutral.black};
`;

export const Wrapper = styled.div`
  align-self: center;
`;
