import React, { FC } from 'react';
import './App.css';
import 'flexboxgrid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Basket from './pages/cart';
import { Nav } from './components/nav/nav';

const App: FC = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/basket">
          <Basket />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
