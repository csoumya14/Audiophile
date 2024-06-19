"use client";
import { FC } from "react";

import { Hamburger } from "../SVGS/Hamburger/Hamburger";
import { Wrapper } from "./Navigation.style";
import { AudioPhileText } from "../SVGS/AudioPhileText/AudioPhileText";
import { Cart } from "../SVGS/Cart/Cart";

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  return (
    <Wrapper>
      <Hamburger />
      <AudioPhileText />
      <Cart />
    </Wrapper>
  );
};
