import React, { PropsWithChildren, FunctionComponent } from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

interface WithLoadingProps {
  status: string;
  onError: Error | null;
}

interface LoadingProps {
  size: 'small' | 'medium' | 'large';
}

const LoadingWrapper = styled.div(({ size }: LoadingProps) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: size === 'small' ? '100px' : size === 'medium' ? '400px' : '600px',
  };
});

export const Loading: FunctionComponent<LoadingProps> = (props: LoadingProps) => {
  return (
    <LoadingWrapper {...props}>
      <CircularProgress />
    </LoadingWrapper>
  );
};

export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 600px;
`;

const withLoading = <P extends object>(Component: React.ComponentType<P>) => {
  return ({ status, onError, ...props }: PropsWithChildren<P> & WithLoadingProps) => {
    if (status === 'idle') {
      return <></>;
    } else if (status === 'loading') {
      return <Loading size="small" />;
    } else if (status === 'error') {
      return <ErrorWrapper>{`Oh! Something happened - error: ${onError}`}</ErrorWrapper>;
    } else {
      return <Component {...(props as P)}>{props.children}</Component>;
    }
  };
};

export default withLoading;
