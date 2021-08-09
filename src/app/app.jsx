import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import classNames from 'classnames';

import Sidebar from 'modules/sidebar/components/Sidebar/sidebar';
import Login from 'modules/login-page/components/LoginPage/loginPage';
import Dashboard from 'modules/dashboard/components/Dashboard/dashboard';
import Header from 'modules/header/components/Header/header';
import Patients from 'modules/patients/components/Patients/patients';
import Calendar from 'modules/calendar/components/Calendar/calendar';
import Report from 'modules/report/components/Report/report';
import Narcology from 'modules/narcology/components/Narcology/narcology';
import PatientPage from 'modules/patient-page/components/PatientPage/patientPage';

import 'rsuite/lib/styles/themes/default/index.less';
import './app.css';
import 'styles/reset.css';


function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Header />
      <main className={classNames('container')}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/report" component={Report} />
          <Route path="/narcology" component={Narcology} />
          <Route path="/psichiatry" component={Narcology} />

          <Switch>
            <Route path="/patients/:id" component={PatientPage} />
            <Route path="/patients" component={Patients} />
          </Switch>

        </Switch>
      </main>
    </BrowserRouter>
  );
}

render(
  <App />,
  document.querySelector('#root'),
);
