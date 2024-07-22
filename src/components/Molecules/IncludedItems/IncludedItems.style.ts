import { Banner } from "@/components/Atoms/Banner/Banner";
import { styled } from "styled-components";

export const StyledHeading = styled(Banner)`
  text-transform: uppercase;
  width: 50%;
`;
// screen reader only
export const StyledTHead = styled.thead`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const StyledTable = styled.table`
  border-spacing: 0px;
  padding: 0px;
`;

export const StyledTd = styled.td`
  padding-right: 15px;
  padding-bottom: 10px;
`;

export const StyledTdQuantity = styled(StyledTd)`
  color: ${(props) => props.theme.palette.primary.darkOrange};
`;
