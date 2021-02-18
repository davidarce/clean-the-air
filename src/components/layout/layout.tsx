import React, { FunctionComponent, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Background } from './background';
import { Footer } from './footer';
import { Header } from './header';

const HeaderWrapper = styled.div((props) => {
  return { height: props.theme.layout.headerHeight };
});

export const FooterWrapper = styled.div((props) => {
  return {
    height: props.theme.layout.footerHeight,
  };
});

export const Main = styled.div((props) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    minHeight: `calc(100vh - ${props.theme.layout.headerHeight} - ${props.theme.layout.footerHeight})`,
    paddingTop: '10px',
  };
});

const Layout: FunctionComponent = (props: PropsWithChildren<any>) => {
  return (
    <Background>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Main>{props.children}</Main>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Background>
  );
};

export default Layout;
