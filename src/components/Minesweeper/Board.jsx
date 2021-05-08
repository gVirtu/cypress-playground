import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import useTheme from '@Hooks/useTheme';
import { mediaLargerThan, spacing } from '@Helpers/theme';

const BoardDiv = styled.div`
  width: 100vmin;
  margin-left: -24px;

  ${mediaLargerThan('xs')} {
    margin: 0 5vw;
    width: 80vmin;
  }
`;

const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 8vmin;
  padding: ${spacing(1)};
`;

const BoardContent = styled.div`
`;

const Board = (props) => {
  const {
    gameOver, victory, flagCount, mines, children,
  } = props;
  const theme = useTheme();
  const [mouseDown, setMouseDown] = useState(false);

  const handleMouseDown = () => (setMouseDown(true));
  const handleMouseUp = () => (setMouseDown(false));

  useEffect(() => {
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  });

  const renderMines = () => {
    const mineCount = Math.max(0, mines - flagCount);

    if (mineCount === 0 && !gameOver) return '0?';

    return mineCount;
  };

  const renderFace = () => {
    if (victory) return '😎';
    if (gameOver) return '😵';
    if (mouseDown) return '😮';

    return '🙂';
  };

  return (
    <BoardDiv theme={theme}>
      <BoardHeader theme={theme}>
        <div>
          💣x
          {renderMines()}
        </div>
        <div>
          {renderFace()}
        </div>
        <div>
          🚩x
          {flagCount}
        </div>
      </BoardHeader>
      <BoardContent>
        {children}
      </BoardContent>
    </BoardDiv>
  );
};

Board.propTypes = {
  gameOver: PropTypes.bool.isRequired,
  victory: PropTypes.bool.isRequired,
  mines: PropTypes.number.isRequired,
  flagCount: PropTypes.number.isRequired,
};

export default Board;
