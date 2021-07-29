import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../modules/login-page/components/LoginPage/loginPage';

import './app.css';
import '../styles/reset.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

render(
  <App />,
  document.getElementById('root'),
);
