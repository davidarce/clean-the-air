import React, { FunctionComponent, PropsWithChildren } from 'react';
import { StylesProvider, MuiThemeProvider, ThemeOptions } from '@material-ui/core/styles';
import { ThemeProvider as ScThemeProvider } from 'styled-components';
import { GlobalStyles, muiTheme } from './global-styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const ThemeProvider: FunctionComponent<{ muiThemeOptions?: ThemeOptions }> = (
  props: PropsWithChildren<{ muiThemeOptions?: ThemeOptions }>,
) => {
  const MuiTheme = muiTheme(props.muiThemeOptions);

  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <MuiThemeProvider theme={MuiTheme}>
        <ScThemeProvider theme={MuiTheme}>
          <GlobalStyles />
          {props.children}
        </ScThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default ThemeProvider;
