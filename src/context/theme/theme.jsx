import { ThemeProvider } from 'styled-components';

const theme = {
  palette: {
    primary: {
      green: '#84D1A0',
      white: '#FEFEFE',
      purple: '#6255a5',
    },
    text: {
      heading: '#413960',
    },
    background: {
      mainGradient: 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);',
      secondaryGradient: ' ',
    },
  },
  fontFamily: {
    main: 'Lato, sans-serif',
  },
  fontSize: {
    sm: '0.875rem',
    base: '1rem',
    lg: '1.5rem',
    xl: '1.8rem',
  },
  fontWeight: {
    regular: '300',
    medium: '400',
    semiBold: '700',
    bold: '900',
  },
  breakpoints: {
    sm: '',
    md: '',
    lg: '',
  },
  extend: {
    borderRadius: {
      button: '',
      card: '',
      form: '',
      input: '',
    },
    boxShadowing: {
      regular: '10px -4px 22px 0px #fcb69f',
      secondary: '10px -4px 22px 0px #3f3f3f',
    },
  },
};
export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
