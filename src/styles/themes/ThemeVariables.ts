import { DefaultTheme } from 'styled-components';

const myTheme: DefaultTheme = {
  palette: {
    primary: {
      darkOrange: '#d87d4a',
      lightOrange: 'hsl(21,94%,75%)',
      darkBlackShade: 'hsl(0,0%,6%)',
      red: 'hsl(0, 100%, 50%)',
      grey: 'hsl(0,0%,95%)',
      darkWhiteShade: 'hsl(0,0%,98%)',
      lightBlue: 'hsl(231.2,77.4%,89.6%)',
    },
    neutral: {
      black: 'hsl(0,0%,0%)',
      white: 'hsl(0, 0%, 100%)',
    },
  },
  fontSizes: {
    heading1: {
      tablet: '56px',
      mobile: '36px',
    },
    heading2: {
      tablet: '40px',
      mobile: '28px',
    },
    heading3: {
      tablet: '32px',
      mobile: '24px',
    },
    heading4: {
      tablet: '32px',
      mobile: '28px',
    },
    heading5: {
      tablet: '18px',
      mobile: '18px',
    },
    heading6: {
      tablet: '56px',
      mobile: '15px',
    },
    overline: {
      tablet: '15px',
      mobile: '15px',
    },
    subTitle: {
      tablet: '13px',
      mobile: '13px',
    },
  },
  lineSpaces: {
    heading1: {
      bigScreen: '58px',
    },
    heading2: {
      bigScreen: '44px',
    },
    heading3: {
      bigScreen: '36px',
    },
    heading4: {
      bigScreen: '38px',
    },
    heading5: {
      bigScreen: '33px',
    },
    heading6: {
      bigScreen: '24px',
    },
    overline: {
      bigScreen: '19px',
      tablet: '25px',
      mobile: '25px',
    },
    subTitle: {
      bigScreen: '25px',
    },
  },
  characterSpaces: {
    heading1: {
      bigScreen: '2px',
    },
    heading2: {
      bigScreen: '1.5px',
    },
    heading3: {
      bigScreen: '1.15px',
    },
    heading4: {
      bigScreen: '2px',
    },
    heading5: {
      bigScreen: '1.7px',
    },
    heading6: {
      bigScreen: '1.3px',
    },
    overline: {
      bigScreen: '10px',
    },
    subTitle: {
      bigScreen: '1px',
    },
  },
  mediaSize: {
    s: '576px',
    md: '768px',
    lg: '992px',
    xlg: '1200px',
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
