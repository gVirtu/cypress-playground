import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ThemeProvider from '@Components/ThemeProvider';
import Home from '@Pages/Home';

const Pages = () => (
  <ThemeProvider>
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default Pages;
