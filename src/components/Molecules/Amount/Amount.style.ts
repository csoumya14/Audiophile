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

export const StyledPara = styled(Banner)<{ isHighlighted?: boolean }>`
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSizes.overline.mobile};
  padding-top: ${(props) => (props.isHighlighted ? "20px" : "0")};
`;

export const StyledParaAmount = styled(Banner)<{ isHighlighted?: boolean }>`
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSizes.overline.mobile};
  font-weight: bold;
  color: ${(props) => (props.isHighlighted ? "#d87d4a" : "black")};
  padding-top: ${(props) => (props.isHighlighted ? "20px" : "0")};
`;
