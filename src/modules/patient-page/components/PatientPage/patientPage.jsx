import React from 'react';
import classNames from 'classnames';
import {
  Steps,
} from 'rsuite';

import './patientPage.css';
import PatientLocation from 'modules/patient-page/components/PatientLocation/patientLocation';
import PatientLife from '../PatientLife/patientLife';


function PatientPage() {
  return (
    <section className={classNames('patient-page')}>
      <Steps current={1}>
        <Steps.Item title="Личная информация" />
        <Steps.Item title="Информация о пациенте" />
        <Steps.Item title="Анамнез заболевания" />
        <Steps.Item title="Другое" />
      </Steps>
      <PatientLocation />
      <PatientLife />
    </section>
  );
}

export default PatientPage;
