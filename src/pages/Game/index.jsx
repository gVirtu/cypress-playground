import React, { useState } from 'react';
import { css, jsx } from '@emotion/react';
import { useForm } from "react-hook-form";
import useTheme from '@Hooks/useTheme';
import Minesweeper from '@Components/Minesweeper';
import FormInput from '@Components/FormInput';

const Game = () => {
  const theme = useTheme();

  const form = useForm();
  const { watch, handleSubmit } = form;

  const [gameKey, setGameKey] = useState(new Date().getTime());
  const [gameSize, setGameSize] = useState(5);
  const [gameMines, setGameMines] = useState(8);

  const formGameSize = watch("gameSize", gameSize);

  const onConfigureGame = (data) => {
    setGameSize(data.gameSize);
    setGameMines(data.gameMines);
    setGameKey(new Date().getTime());
  }

  return (
    <div
      css={css`
        padding: ${theme.spacing[2]}px;
        color: ${theme.textColor};
        background-color: ${theme.backgroundColor};
        font-size: 24px;
        border-radius: 4px;
      `}
    >
      <h1>Minesweeper</h1>
      <Minesweeper
        key={gameKey}
        size={gameSize}
        mines={gameMines}
      />
      <form
        onSubmit={handleSubmit(onConfigureGame)}
        css={css`
          padding: ${theme.spacing[2]}px;
        `}
      >
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
      </form>
    </div>
  );
};

export default Game;
