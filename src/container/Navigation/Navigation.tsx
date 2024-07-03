"use client";
import { FC } from "react";

import { Hamburger } from "../../components/SVGS/Hamburger/Hamburger";
import { Wrapper } from "./Navigation.style";
import { AudioPhileText } from "../../components/SVGS/AudioPhileText/AudioPhileText";
import { Cart } from "../../components/SVGS/Cart/Cart";

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
