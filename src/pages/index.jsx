import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ThemeProvider from '@Components/ThemeProvider';
import Home from '@Pages/Home';
import Game from '@Pages/Game';

const Pages = () => (
  <ThemeProvider>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/game">
          <Game />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default Pages;
