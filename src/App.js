import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LeberzirrhosePage from './pages/LeberzirrhosePage';
import MainPage from './pages/MainPage';

function App() {

  return (
    <Switch>
      <Route path='/' exact>
        <MainPage />
      </Route>
      <Route path='/leberzirrhose'>
        <LeberzirrhosePage />
      </Route>
    </Switch>
  );
}

export default App;
