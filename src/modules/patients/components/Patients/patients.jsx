import * as React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import './patients.css';


const patientTemp = [
  {
    credentials: 'Зимницкий Юрий Андреевич',
    age: 30,
    birthdate: '27.11.1990',
    diagnosis: 'Хронический кретинизм',
    phone: '+375 44 767 83 27',
    visit: '24.07.2021',
  },
  {
    credentials: 'Зимницкая Юлия Юрьевна',
    age: 27,
    birthdate: '14.07.1994',
    diagnosis: 'Ля какая',
    phone: '8 (0232) 99 67 19',
    visit: '27.07.2021',
  },
];

function LastAdded({ patient }) {
  return (
    <div className={classNames('last-added__patient')}>
      <div className={classNames('last-added__patient-credentials')}>{patient.credentials}</div>
      <div className={classNames('last-added__patient-age')}>{patient.age}</div>
      <div className={classNames('last-added__patient-birthdate')}>{patient.birthdate}</div>
      <div className={classNames('last-added__patient-diagnosis')}>{patient.diagnosis}</div>
      <div className={classNames('last-added__patient-phone')}>{patient.phone}</div>
      <div className={classNames('last-added__patient-visit')}>{patient.visit}</div>
    </div>
  );
}
function Patients() {
  return (
    <section className={classNames('patients')}>
      <p className={classNames('patients__last-added-title')}>Последние добавленные</p>
      <div id="last-added" className={classNames('patients__last-added')}>
        <div className={classNames('patients__last-added-header')}>
          <div className={classNames('patients__last-added-credentials')}>Фамилия Имя Отчество</div>
          <div className={classNames('patients__last-added-age')}>Полных лет</div>
          <div className={classNames('patients__last-added-birthdate')}>Дата рождения</div>
          <div className={classNames('patients__last-added-diagnosis')}>Диагноз</div>
          <div className={classNames('patients__last-added-phone')}>Номер телефона</div>
          <div className={classNames('patients__last-added-visit')}>Последний визит</div>
        </div>
        {
          patientTemp.map((
            patient, index,
          ) => <LastAdded key={index} patient={patient} />)
        }
      </div>
    </section>
  );
}

LastAdded.propTypes = {
  patient: PropTypes.shape({
    credentials: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    birthdate: PropTypes.string.isRequired,
    visit: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    diagnosis: PropTypes.string.isRequired,
  }).isRequired,
};

export default Patients;
