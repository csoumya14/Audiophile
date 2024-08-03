"use client";
import { FC, useState } from "react";
import { Hamburger } from "../../Atoms/SVGs/Hamburger/Hamburger";
import { Container, StyledOpenCloseButton, Wrapper } from "./Navigation.style";
import { AudioPhileText } from "@/components/Atoms/SVGs/AudioPhileText/AudioPhileText";
import { CartCount } from "../CartCount/CartCount";
import { Close } from "@/components/Atoms/SVGs/Close/Close";
import { NavBar } from "../NavBar/NavBar";

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleNav = () => {
    setOpen(!open);
  };
  return (
    <Wrapper>
      <NavBar toggleNav={toggleNav} setOpen={setOpen} open={open} />
      <StyledOpenCloseButton type="button" onClick={toggleNav}>
        {open ? <Close /> : <Hamburger />}
      </StyledOpenCloseButton>
      <AudioPhileText />
      <Container><CartCount /></Container>
    </Wrapper>
  );
};
