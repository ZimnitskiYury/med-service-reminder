import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useFormik } from 'Formik';
import { Modal, InputPicker } from 'rsuite';

import './addPatientDialog.css';


function AddPatientDialog({ isOpen, toggleModal }) {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      surName: '',
      birthdate: new Date().toLocaleDateString('ru'),
      identification: '',
      sex: 'Мужской',
    },
    onSubmit: () => {},
  });

  return (
    <Modal show={isOpen} onHide={toggleModal}>
      <Modal.Header>
        <Modal.Title classPrefix="patient-dialog__title">Добавление пациента</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id="add-patient-form" className={classNames('patient-dialog__form')} onSubmit={formik.handleSubmit}>

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
            id="identification"
            name="identification"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.identification}
            placeholder="Идентификационный номер"
          />

          <InputPicker
            id="sex"
            data={[
              {
                label: 'Мужской',
                value: 'Мужской',
              },
              {
                label: 'Женский',
                value: 'Женский',
              },
            ]}
            onChange={(value) => formik.setFieldValue(
              'sex',
              value,
            )}
            value={formik.values.sex}
          />
        </form>
      </Modal.Body>
      <Modal.Footer classPrefix="patient-dialog__footer">
        <button className={classNames('patient-dialog__button')} type="submit" form="add-patient-form" onClick={toggleModal}>Добавить</button>
      </Modal.Footer>
    </Modal>
  );
}

AddPatientDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default AddPatientDialog;
