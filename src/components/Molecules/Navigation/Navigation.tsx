"use client";
import { FC } from "react";

import { Hamburger } from "../../Atoms/SVGs/Hamburger/Hamburger";
import { Wrapper } from "./Navigation.style";

import { Cart } from "../../Atoms/SVGs/Cart/Cart";
import { AudioPhileText } from "@/components/Atoms/SVGs/AudioPhileText/AudioPhileText";
import { CartCount } from "../CartCount/CartCount";

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  return (
    <Wrapper>
      <Hamburger />
      <AudioPhileText />
      <CartCount />
    </Wrapper>
  );
};
