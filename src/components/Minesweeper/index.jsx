import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import Cell from './Cell';
import CellData from './CellData';

const Minesweeper = (props) => {
  const { size, mines } = props;

  const [board, setBoard] = useState([]);
  const [correctFlagCount, setCorrectFlagCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [victory, setVictory] = useState(false);
  const [firstClick, setFirstClick] = useState(true);

  const setupBoard = () => {
    let i;
    let j;

    // Build the starting board state
    const newBoard = (Array.from(Array(size), () => new Array(size)));

    for (i = 0; i < size; i++) {
      for (j = 0; j < size; j++) {
        newBoard[i][j] = new CellData({});
      }
    }

    setBoard(newBoard);
  };

  useEffect(setupBoard, []);

  useEffect(() => {
    if (correctFlagCount === mines) {
      setGameOver(true);
      setVictory(true);
    }
  }, [correctFlagCount]);

  const positionMines = (clickRow, clickCol) => {
    let i;
    let j;
    let positions = [];

    // Build array with all positions in grid
    for (i = 0; i < size; i++) {
      for (j = 0; j < size; j++) {
        positions.push(JSON.stringify([i, j]));
      }
    }

    // Build a set for quick verification.
    // We exclude the clicked position from the possibilities,
    // shuffle the array and get the first N elements (where N = mine count).
    const clickPosition = JSON.stringify([clickRow, clickCol]);

    const mineSet = new Set(
      positions
        .filter((position) => (position != clickPosition))
        .sort(() => (Math.random() - 0.5))
        .slice(0, mines)
    );

    // Helper function to count adjacent mines given an empty position
    const countAdjacency = (i, j) => {
      let x;
      let y;
      let count = 0;

      for (x = i - 1; x <= i + 1; x++) {
        for (y = j - 1; y <= j + 1; y++) {
          const adjacent = JSON.stringify([x, y]);

          if (mineSet.has(adjacent))
            count++;
        }
      }

      // We assume ([i, j]) never has a mine
      return count;
    }

    // Build the new board state
    const newBoard = board.map((row, i) => (
      row.map((_cell, j) => {
        const pos = JSON.stringify([i, j]);
        const hasMine = mineSet.has(pos);
        const adjacentCount = (hasMine) ? (0) : (countAdjacency(i, j));

        return new CellData({ mine: hasMine, adjacentCount });
      })
    ));

    setBoard(newBoard);

    return newBoard;
  }

  const shouldReveal = (cell) => (
    !cell.wasClicked() && !cell.hasMine() && !cell.wasFlagged()
  );

  const revealCell = (tempBoard, i, j) => {
    const cell = tempBoard[i][j];
    cell.click();

    if (cell.hasMine()) {
      setGameOver(true);
      return;
    }

    if (i > 0 && shouldReveal(tempBoard[i - 1][j])) {
      revealCell(tempBoard, i - 1, j);
    }
    if (j > 0 && shouldReveal(tempBoard[i][j - 1])) {
      revealCell(tempBoard, i, j - 1);
    }
    if (i < size - 1 && shouldReveal(tempBoard[i + 1][j])) {
      revealCell(tempBoard, i + 1, j);
    }
    if (j < size - 1 && shouldReveal(tempBoard[i][j + 1])) {
      revealCell(tempBoard, i, j + 1);
    }
  }

  // When we click a cell, we recursively reveal
  // neighbors that don't have mines.
  const handleClick = (event, i, j) => {
    event.preventDefault();

    if (gameOver) return;

    let currentBoard = board;

    if (firstClick) {
      currentBoard = positionMines(i, j);
      setFirstClick(false);
    }

    // Deep copy the entire game board
    const newBoard = currentBoard.map(
      (row) => (
        row.map(
          (cell) => (new CellData(cell.props()))
        )
      )
    );

    revealCell(newBoard, i, j);
    setBoard(newBoard);
  }

  // Applies changes to a single cell located in row i, col j.
  const changeCell = (i, j, changes) => {
    if (gameOver) return;

    const cell = board[i][j];
    const newCell = new CellData({ ...cell.props(), ...changes });

    const newBoard = [...board];

    newBoard[i] = [...newBoard[i]];
    newBoard[i][j] = newCell;

    setBoard(newBoard);
  }

  // When the right button is clicked, we toggle a cell's red flag.
  const handleFlag = (event, i, j) => {
    event.preventDefault();

    const cell = board[i][j];
    const flagged = !cell.wasFlagged();

    const score = (cell.hasMine()) ? (1) : (-1);

    if (flagged) {
      setCorrectFlagCount(correctFlagCount + score);
    } else {
      setCorrectFlagCount(correctFlagCount - score);
    }

    changeCell(i, j, { flagged });
  }

  // Render the game board.
  const renderBoard = () => (
    board.map(
      (row, i) => (
        <Row key={i}>
          {
            row.map(
              (cell, j) => {
                return (<Cell
                  key={j}
                  gameOver={gameOver}
                  victory={victory}
                  hasMine={cell.hasMine()}
                  clicked={cell.wasClicked()}
                  flagged={cell.wasFlagged()}
                  adjacentCount={cell.getAdjacentCount()}
                  onClick={(e) => (handleClick(e, i, j))}
                  onRightClick={(e) => (handleFlag(e, i, j))}
                />)
              }
            )
          }
        </Row>
      ),
    )
  );

  const renderGameMessage = () => {
    if (victory) {
      return <h2>You won!! 🥳</h2>
    }

    if (gameOver) {
      return <h2>💥 BOOM! Try again... </h2>
    }
  }

  return (
    <>
      { renderBoard() }
      { renderGameMessage() }
    </>
  );
};

Minesweeper.propTypes = {
  size: PropTypes.number,
  mines: PropTypes.number,
};

Minesweeper.defaultProps = {
  size: 5,
  mines: 3,
};

export default Minesweeper;
