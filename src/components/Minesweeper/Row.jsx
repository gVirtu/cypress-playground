import React from 'react';
import styled from '@emotion/styled';
import useTheme from '@Hooks/useTheme';

const RowDiv = styled.div`
  display: flex;
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
