import { theme } from '@chakra-ui/core';

const breakpoints = ['360px', '768px', '1024px', '1440px'];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const AQUAMARINE = '#64DDAA';
const DARKTHEME_COLOR = '#0A192F';

const customTheme = {
  ...theme,
  breakpoints,
  colors: {
    Aquamarine: AQUAMARINE,
    gray: {
      800: DARKTHEME_COLOR,
    },
    whiteAlpha: {
      900: AQUAMARINE,
    },
  },
};

export default customTheme;
