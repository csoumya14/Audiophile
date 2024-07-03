"use client";
import { myTheme } from "@/styles/themes/ThemeVariables";
import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { Navigation } from "../Navigation/Navigation";
import GlobalStyles from "@/styles/GlobalStyles";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <Navigation />
      {children}
      <Footer />
    </ThemeProvider>
  );
};
