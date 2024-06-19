import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      primary: {
        darkOrange: string;
        lightOrange: string;
        darkBlackShade: string;
        grey: string;
        darkWhiteShade: string;
        lightBlue: string;
      };
      neutral: {
        black: string;
        white: string;
      };
    };
    fontSizes: {
      heading1: {
        bigScreen: string;
      };
      heading2: {
        bigScreen: string;
      };
      heading3: {
        bigScreen: string;
      };
      heading4: {
        bigScreen: string;
      };
      heading5: {
        bigScreen: string;
      };
      heading6: {
        bigScreen: string;
      };
      overline: {
        bigScreen: string;
      };
      subTitle: {
        bigScreen: string;
      };
    };
    lineSpaces: {
      heading1: {
        bigScreen: string;
      };
      heading2: {
        bigScreen: string;
      };
      heading3: {
        bigScreen: string;
      };
      heading4: {
        bigScreen: string;
      };
      heading5: {
        bigScreen: string;
      };
      heading6: {
        bigScreen: string;
      };
      overline: {
        bigScreen: string;
      };
      subTitle: {
        bigScreen: string;
      };
    };
    characterSpaces: {
      heading1: {
        bigScreen: string;
      };
      heading2: {
        bigScreen: string;
      };
      heading3: {
        bigScreen: string;
      };
      heading4: {
        bigScreen: string;
      };
      heading5: {
        bigScreen: string;
      };
      heading6: {
        bigScreen: string;
      };
      overline: {
        bigScreen: string;
      };
      subTitle: {
        bigScreen: string;
      };
    };
    mediaSize: {
      s: string;
      md: string;
      lg: string;
      xlg: string;
    };
    height: {
      tabSectionHeightLargeScreen: number;
      descriptionHeightLargeScreen: number;
      tabSectionHeightSmallScreen: number;
      descriptionHeightSmallScreen: number;
    };
    width: {
      navBarWidth: number;
    };
  }
}
