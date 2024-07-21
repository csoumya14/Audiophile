"use client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/styles/GlobalStyles";
import { Main } from "./Providers.style";
import StyledComponentsRegistry from "../registry";
import { myTheme } from "@/styles/themes/ThemeVariables";
import { CartProvider } from "@/context/CartContext";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={myTheme}>
        <CartProvider>
          <GlobalStyles />
          <Main>{props.children}</Main>
        </CartProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
