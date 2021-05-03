import React from 'react';
import styled from '@emotion/styled';
import useTheme from '@Hooks/useTheme';
import { mediaLargerThan } from '@Helpers/theme';

const RowDiv = styled.div`
  display: flex;
  max-width: 100vmin;

  ${mediaLargerThan('xs')} {
    margin: 0 5vw;
    max-width: 80vmin;
  }
`;

const Row = (props) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <RowDiv theme={theme}>
      { children }
    </RowDiv>
  );
};

Row.propTypes = {
};

export default Row;
