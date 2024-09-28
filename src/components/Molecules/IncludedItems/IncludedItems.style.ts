import { Banner } from '@/components/Atoms/Banner/Banner';
import { styled } from 'styled-components';

export const StyledHeading = styled(Banner)`
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSizes.heading3.mobile};
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    font-size: ${props => props.theme.fontSizes.heading3.tablet};
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
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    padding:0rem;
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    padding:0;
`;

export const StyledTd = styled.td`
  padding-bottom: 10px;
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    padding-bottom: 0px;
  }
`;

export const StyledTbody = styled.tbody`
  width: 100%;
`;

export const StyledTdQuantity = styled(StyledTd)`
  padding-right: 10px;
  color: ${props => props.theme.palette.primary.darkOrange};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    grid-template-rows: 0.3fr 1fr;
    grid-template-columns: 1fr;
  }
`;
