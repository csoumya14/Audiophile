import { IncludedItem } from "@/types/products";
import { FC } from "react";
import { StyledHeading, StyledTable, StyledTd, StyledTdQuantity, StyledTHead } from "./IncludedItems.style";

interface IncludedItemsProps {
  includes: IncludedItem[];
}

export const IncludedItems: FC<IncludedItemsProps> = ({ includes }) => {
  return (
    <>
      <StyledHeading textLevel="h4">In the box</StyledHeading>
      <StyledTable>
        <StyledTHead>
          <tr>
            <th>column1</th>
            <th>column2</th>
          </tr>
        </StyledTHead>
        <tbody>
          {includes.map((item, index) => (
            <tr key={index}>
              <StyledTdQuantity>{item.quantity}x</StyledTdQuantity>
              <StyledTd>{item.item}</StyledTd>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
};
