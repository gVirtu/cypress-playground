import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const CellContentSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CellContent = ({ text, color }) => (
  <CellContentSvg viewBox="0 0 20 20">
    <text fill={color} dominantBaseline="central" textAnchor="middle" x="50%" y="50%">
      {text}
    </text>
  </CellContentSvg>
);

CellContent.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

CellContent.defaultProps = {
  color: 'black',
};

export default CellContent;
