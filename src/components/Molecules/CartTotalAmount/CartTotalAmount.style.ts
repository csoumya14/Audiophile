import { Banner } from "@/components/Atoms/Banner/Banner";
import { Button } from "@/components/Atoms/Button/Button";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledRemoveButton = styled(Button)`
  background: transparent;
  color: ${(props) => props.theme.palette.neutral.black};
  text-decoration: underline;
`;

export const StyledPara = styled(Banner)`
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSizes.overline.mobile};
`;

export const StyledParaAmount = styled(Banner)`
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSizes.overline.mobile};
  font-weight: bold;
`;
