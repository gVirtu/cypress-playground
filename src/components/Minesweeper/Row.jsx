import React from 'react';
import styled from '@emotion/styled';

const RowDiv = styled.div`
  display: flex;
  margin: 0 5vw;
  max-width: 80vmin;
`;

const Row = (props) => {
  const { children } = props;

  return (
    <RowDiv>
      { children }
    </RowDiv>
  );
};

Row.propTypes = {
};

export default Row;
