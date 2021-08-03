import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useFormik } from 'Formik';
import Dialog from '@material-ui/core/Dialog';

import './addPatientDialog.css';


function AddPatientDialog({ isOpen, toggleModal }) {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      surName: '',
      birthdate: new Date().toLocaleDateString('ru'),
      diagnosis: '',
    },
    onSubmit: () => {},
  });

  return (
    <Dialog open={isOpen} onClose={toggleModal} aria-labelledby="form-dialog-title">
      <h1 className={classNames('patient-dialog')}>Добавить нового пациента</h1>
      <form className={classNames('patient-dialog__form')} onSubmit={formik.handleSubmit}>

        <input
          className={classNames('patient-dialog__input')}
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          placeholder="Имя"
        />

        <input
          className={classNames('patient-dialog__input')}
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          placeholder="Фамилия"
        />

        <input
          className={classNames('patient-dialog__input')}
          id="surName"
          name="surName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.surName}
          placeholder="Отчество"
        />

        <input
          className={classNames('patient-dialog__input')}
          id="birthdate"
          name="birthdate"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.birthdate}
          placeholder="Дата Рождения"
        />

        <input
          className={classNames('patient-dialog__input')}
          id="diagnosis"
          name="diagnosis"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.diagnosis}
          placeholder="Диагноз"
        />

        <button className={classNames('patient-dialog__button')} type="submit">Добавить</button>
      </form>
    </Dialog>
  );
}

AddPatientDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default AddPatientDialog;
