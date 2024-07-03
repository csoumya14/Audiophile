"use client";
import { FC } from "react";
import { StyledHeading, Wrapper } from "./HeadingCategory.style";

interface HeadingCategoryProps {
  headingText: string;
}

export const HeadingCategory: FC<HeadingCategoryProps> = ({ headingText }) => {
  return (
    <Wrapper>
      <StyledHeading textLevel={"h1"}>{headingText}</StyledHeading>
    </Wrapper>
  );
};
