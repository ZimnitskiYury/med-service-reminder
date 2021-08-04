import React from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { Steps } from 'rsuite';

import './patientPage.css';


function PatientPage() {
  const { id } = useParams();

  return (
    <section className={classNames('patient-page')}>
      <Steps current={2}>
        <Steps.Item title="Личная информация" />
        <Steps.Item title="Место проживания" />
        <Steps.Item title="Анамнез жизни" />
        <Steps.Item title="Анамнез заболевания" />
        <Steps.Item title="Другое" />
      </Steps>
      <div>{id}</div>
    </section>
  );
}

export default PatientPage;
