import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AddPatientDialog from 'modules/patients/components/PatientForm/addPatientDialog';

import './patients.css';


const patientTemporary = [
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
  {
    credentials: 'Зимницкая Марина Иосифовна',
    age: 27,
    birthdate: '11.09.1969',
    diagnosis: 'Еська',
    phone: '+375 29 932 29 68',
    visit: '27.07.2021',
  },
  {
    credentials: 'Зимницкий Дмитрий Андреевич',
    age: 27,
    birthdate: '19.03.1993',
    diagnosis: 'Мент Головного Мозга',
    phone: '-',
    visit: '27.07.2021',
  },
  {
    credentials: 'Зимницкий Александр Великий Генадьевич',
    age: 27,
    birthdate: '06.10.1990',
    diagnosis: 'Шурик',
    phone: '-',
    visit: '27.07.2021',
  },
];

function PatientsTable({ id, name }) {
  return (
    <div>
      <p className={classNames('patients__table-title')}>{name}</p>
      <ul id={id} className={classNames('patients__table')}>
        <div className={classNames('patients__table-header')}>
          <div className={classNames('patients__table-credentials')}>Фамилия Имя Отчество</div>
          <div className={classNames('patients__table-age')}>Полных лет</div>
          <div className={classNames('patients__table-birthdate')}>Дата рождения</div>
          <div className={classNames('patients__table-diagnosis')}>Диагноз</div>
          <div className={classNames('patients__table-phone')}>Номер телефона</div>
          <div className={classNames('patients__table-visit')}>Последний визит</div>
        </div>
        {
        patientTemporary.map((
          patient, index,
        ) => <Patient key={index} patient={patient} />)

        }
      </ul>
    </div>
  );
}

function Patient({ patient }) {
  return (
    <li className={classNames('patient')}>
      <div className={classNames('patient__credentials')}>{patient.credentials}</div>
      <div className={classNames('patient__age')}>{patient.age}</div>
      <div className={classNames('patient__birthdate')}>{patient.birthdate}</div>
      <div className={classNames('patient__diagnosis')}>{patient.diagnosis}</div>
      <div className={classNames('patient__phone')}>{patient.phone}</div>
      <div className={classNames('patient__visit')}>{patient.visit}</div>
    </li>
  );
}

function Patients() {
  const [
    isOpen,
    toggleModal,
  ] = useReducer(
    (state) => !state,
    false,
  );

  return (
    <section className={classNames('patients')}>
      <PatientsTable name="Последние добавленные" id="last-added" />
      <menu className={classNames('patients__menu')}>
        <button className={classNames('patients__menu-button')} type="button" onClick={toggleModal}>Добавить пациента</button>
        <button className={classNames('patients__menu-button')} type="button" onClick={toggleModal}>Редактировать</button>
        <button className={classNames('patients__menu-button')} type="button" onClick={toggleModal}>Удалить</button>
      </menu>
      <AddPatientDialog isOpen={isOpen} toggleModal={toggleModal} />
      <PatientsTable name="Последние посещения" id="last-visited" />
    </section>
  );
}

PatientsTable.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
Patient.propTypes = {
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
