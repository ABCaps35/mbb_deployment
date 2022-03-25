import React from 'react';
import { Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

import AddPirate from './Views/AddPirate';
import PirateDashboard from './Views/PirateDashboard';
import PirateView from './Views/PirateView';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Switch>
        <Route exact path="/pirates">
          <PirateDashboard />
        </Route>
        <Route exact path="/pirate/new">
          <AddPirate />
        </Route>
        <Route exact path="/pirate/:id">
          <PirateView />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
