import { Banner } from "@/components/Atoms/Banner/Banner";
import { styled } from "styled-components";

export const StyledHeading = styled(Banner)`
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSizes.heading3.mobile};
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    font-size: ${(props) => props.theme.fontSizes.heading3.tablet};
  }
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
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    padding:0 6rem;
`;

export const StyledTd = styled.td`
  padding-right: 15px;
  padding-bottom: 10px;
`;

export const StyledTdQuantity = styled(StyledTd)`
  color: ${(props) => props.theme.palette.primary.darkOrange};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;
