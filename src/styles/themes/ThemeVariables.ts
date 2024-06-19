import { DefaultTheme } from "styled-components";

const myTheme: DefaultTheme = {
  palette: {
    primary: {
      darkOrange: "#d87d4a",
      lightOrange: "hsl(21,94%,75%)",
      darkBlackShade: "hsl(0,0%,6%)",
      grey: "hsl(0,0%,95%)",
      darkWhiteShade: "hsl(0,0%,98%)",
      lightBlue: "hsl(231.2,77.4%,89.6%)",
    },
    neutral: {
      black: "hsl(0,0%,0%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  fontSizes: {
    heading1: {
      bigScreen: "56px",
    },
    heading2: {
      bigScreen: "40px",
    },
    heading3: {
      bigScreen: "32px",
    },
    heading4: {
      bigScreen: "28px",
    },
    heading5: {
      bigScreen: "24px",
    },
    heading6: {
      bigScreen: "18px",
    },
    overline: {
      bigScreen: "14px",
    },
    subTitle: {
      bigScreen: "13px",
    },
  },
  lineSpaces: {
    heading1: {
      bigScreen: "58px",
    },
    heading2: {
      bigScreen: "44px",
    },
    heading3: {
      bigScreen: "36px",
    },
    heading4: {
      bigScreen: "38px",
    },
    heading5: {
      bigScreen: "33px",
    },
    heading6: {
      bigScreen: "24px",
    },
    overline: {
      bigScreen: "19px",
    },
    subTitle: {
      bigScreen: "25px",
    },
  },
  characterSpaces: {
    heading1: {
      bigScreen: "2px",
    },
    heading2: {
      bigScreen: "1.5px",
    },
    heading3: {
      bigScreen: "1.15px",
    },
    heading4: {
      bigScreen: "2px",
    },
    heading5: {
      bigScreen: "1.7px",
    },
    heading6: {
      bigScreen: "1.3px",
    },
    overline: {
      bigScreen: "10px",
    },
    subTitle: {
      bigScreen: "1px",
    },
  },
  mediaSize: {
    s: "576px",
    md: "768px",
    lg: "992px",
    xlg: "1200px",
  },
  height: {
    tabSectionHeightLargeScreen: 90,
    descriptionHeightLargeScreen: 150,
    tabSectionHeightSmallScreen: 110,
    descriptionHeightSmallScreen: 110,
  },
  width: {
    navBarWidth: 574.406,
  },
};

export { myTheme };
