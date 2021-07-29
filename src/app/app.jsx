import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from '../modules/main-page/components/MainPage/mainPage';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

render(
  <App />,
  document.getElementById('root'),
);
