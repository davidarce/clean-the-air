import { createGlobalStyle } from 'styled-components';
import { createMuiTheme, Theme, ThemeOptions } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Graphik Web', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.4;
    margin: 0;
    background-color: #ffffff;
  }

  h1 {
    color: var(--fontsColor);
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 14px;
    margin-top: 14px;
  }

  h2 {
    color: var(--fontsColor);
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 3px;
    margin-bottom: 14px;
    margin-top: 14px;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 16px;
      padding: 0;
    }

    h2 {
      font-size: 14px;
      padding: 0;
    }
}
`;

export const muiTheme = (options?: ThemeOptions): Theme => {
  return createMuiTheme({
    layout: {
      headerHeight: '64px',
      footerHeight: '100px',
    },
    overrides: {
      MuiMenu: {
        paper: {
          backgroundColor: 'var(--primaryColor)',
          color: 'white',
        },
      },
    },
    palette: {
      primary: grey,
    },
    typography: {
      fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;`
    },
    ...options,
  });
};
