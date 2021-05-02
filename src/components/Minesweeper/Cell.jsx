import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import CellContent from './CellContent';

const COLORS = {
  1: 'blue',
  2: 'green',
  3: 'red',
  4: 'purple',
  5: 'maroon',
  6: 'teal',
  7: 'black',
  8: 'slategray',
};

const CellButton = styled.button`
  flex: 1;
  position: relative;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const UnclickedCell = styled(CellButton)`
  transition: box-shadow 0.1s ease-in;
  background-color: #ddd;
  box-shadow: inset 2px 2px 2px rgba(255, 255, 255, .4), inset -2px -2px 2px rgba(0, 0, 0, .4);

  &:hover:enabled {
    box-shadow: inset 8px 8px 8px rgba(255, 255, 255, .8), inset -8px -8px 8px rgba(128, 128, 128, .4);
  }

  &:active:enabled {
    background-color: #bbb;
    box-shadow: inset 16px 16px 16px rgba(0, 0, 0, .4), inset -8px -8px 8px rgba(128, 128, 128, .4);
  }
`;

const ClickedCell = styled(CellButton)``;

const Cell = (props) => {
  const {
    hasMine, clicked, flagged, adjacentCount, gameOver, victory, onClick, onRightClick,
  } = props;

  let content = '';

  if (clicked || (gameOver && hasMine)) {
    content = (adjacentCount > 0) ? (adjacentCount.toString()) : ('');
    if (hasMine) content = (victory) ? '🌸' : '💣';
    return (
      <ClickedCell>
        <CellContent text={content} color={COLORS[content]} />
      </ClickedCell>
    );
  }

  if (flagged) content = '🚩';
  return (
    <UnclickedCell disabled={gameOver} onClick={onClick} onContextMenu={onRightClick}>
      <CellContent text={content} />
    </UnclickedCell>
  );
};

Cell.propTypes = {
  hasMine: PropTypes.bool.isRequired,
  gameOver: PropTypes.bool.isRequired,
  victory: PropTypes.bool.isRequired,
  clicked: PropTypes.bool.isRequired,
  flagged: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onRightClick: PropTypes.func.isRequired,
  adjacentCount: PropTypes.number.isRequired,
};

export default Cell;
