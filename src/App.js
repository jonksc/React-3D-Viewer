import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navibar from './components/UI/Navibar';
import LeberzirrhosePage from './pages/LeberzirrhosePage';
import MainPage from './pages/MainPage';
import PlaceholderPage from './pages/PlaceholderPage';

function App() {

  return (
    <>
      <Navibar />
      <Switch>
        <Route path='/' exact>
          <MainPage />
        </Route>
        <Route path='/leberzirrhose'>
          <LeberzirrhosePage />
        </Route>
        <Route path='/placeholder'>
          <PlaceholderPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
