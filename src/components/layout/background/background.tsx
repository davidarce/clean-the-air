import React, { FunctionComponent, PropsWithChildren } from 'react';
import { styled } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const StyledBackground = styled(Container)({
  background: 'var(--baseBackground)',
  minHeight: '100vh',
  width: 'auto',
});

const Background: FunctionComponent = (props: PropsWithChildren<any>) => {
  return <StyledBackground>{props.children}</StyledBackground>;
};

export default Background;
