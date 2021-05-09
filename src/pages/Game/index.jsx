import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import useTheme from '@Hooks/useTheme';
import {
  textColor, backgroundColor, mediaLargerThan, spacing,
} from '@Helpers/theme';
import Minesweeper from '@Components/Minesweeper';
import FormInput from '@Components/FormInput';

const GameDiv = styled.div`
  padding: ${spacing(1)};
  color: ${textColor()};
  background-color: ${backgroundColor()};
  font-size: 24px;
  border-radius: 4px;

  ${mediaLargerThan('xs')} {
    padding: ${spacing(2)};
  }
`;

const GameOptions = styled.form`
  padding: ${spacing(2)};
`;

const Game = () => {
  const theme = useTheme();

  const form = useForm();
  const { watch, handleSubmit } = form;

  const [gameKey, setGameKey] = useState(new Date().getTime());
  const [gameSize, setGameSize] = useState(6);
  const [gameMines, setGameMines] = useState(15);

  const formGameSize = watch('gameSize', gameSize);

  const onConfigureGame = (data) => {
    setGameSize(data.gameSize);
    setGameMines(data.gameMines);
    setGameKey(new Date().getTime());
  };

  const onRestartGame = () => {
    setGameKey(new Date().getTime());
  };

  return (
    <GameDiv theme={theme}>
      <h1>Minesweeper</h1>
      <Minesweeper
        key={gameKey}
        size={gameSize}
        mines={gameMines}
        handleRestart={onRestartGame}
      />
      <GameOptions theme={theme} onSubmit={handleSubmit(onConfigureGame)}>
        <FormInput
          name="gameSize"
          label="Board Size"
          type="number"
          settings={{
            required: true,
            valueAsNumber: true,
            min: 1,
            max: 30,
          }}
          defaultValue={gameSize}
          form={form}
        />
        <FormInput
          name="gameMines"
          label="Mine Count"
          type="number"
          settings={{
            required: true,
            valueAsNumber: true,
            min: 1,
            max: formGameSize * formGameSize,
          }}
          defaultValue={gameMines}
          form={form}
        />
        <input type="submit" value="💡 New Game" />
      </GameOptions>
    </GameDiv>
  );
};

export default Game;
