import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: {
        darkOrange: string;
        lightOrange: string;
        darkBlackShade: string;
        red: string;
        grey: string;
        darkWhiteShade: string;
        lightBlue: string;
        lightBlack: string;
        mediumBlack: string;
      };
      neutral: {
        black: string;
        white: string;
      };
    };
    fontSizes: {
      heading1: {
        tablet: string;
        mobile: string;
      };
      heading2: {
        tablet: string;
        mobile: string;
      };
      heading3: {
        tablet: string;
        mobile: string;
      };
      heading4: {
        tablet: string;
        mobile: string;
      };
      heading5: {
        tablet: string;
        mobile: string;
      };
      heading6: {
        tablet: string;
        mobile: string;
      };
      overline: {
        tablet: string;
        mobile: string;
      };
      subTitle: {
        tablet: string;
        mobile: string;
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
        tablet: string;
        mobile: string;
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
