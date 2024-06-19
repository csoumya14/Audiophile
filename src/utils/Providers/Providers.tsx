"use client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/styles/GlobalStyles";
import { Main } from "./Providers.style";
import StyledComponentsRegistry from "../registry";
import { myTheme } from "@/styles/themes/ThemeVariables";


const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={myTheme}>
        
          <GlobalStyles />
         <Main>{props.children}</Main> 
       
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;