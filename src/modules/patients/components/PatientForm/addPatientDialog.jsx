import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useFormik } from 'formik';
import {
  Modal, InputPicker, DatePicker, Input,
} from 'rsuite';

import './addPatientDialog.css';


const locale = {
  sunday: 'Вс',
  monday: 'Пн',
  tuesday: 'Вт',
  wednesday: 'Ср',
  thursday: 'Чт',
  friday: 'Пт',
  saturday: 'Сб',
  ok: 'OK',
  today: 'Сегодня',
  yesterday: 'Вчера',
  hours: 'Часы',
  minutes: 'Минуты',
  seconds: 'Секунды',
};

function AddPatientDialog({ isOpen, toggleModal }) {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      surname: '',
      birthdate: '',
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

          <Input
            classPrefix={classNames('patient-dialog__input')}
            id="firstname"
            name="firstname"
            onChange={(value) => formik.setFieldValue(
              'firstname',
              value,
            )}
            value={formik.values.firstname}
            placeholder="Имя"
          />

          <Input
            classPrefix={classNames('patient-dialog__input')}
            id="lastname"
            name="lastname"
            onChange={(value) => formik.setFieldValue(
              'lastname',
              value,
            )}
            value={formik.values.lastname}
            placeholder="Фамилия"
          />

          <Input
            classPrefix={classNames('patient-dialog__input')}
            id="surName"
            name="surName"
            onChange={(value) => formik.setFieldValue(
              'surname',
              value,
            )}
            value={formik.values.surname}
            placeholder="Отчество"
          />

          <Input
            classPrefix={classNames('patient-dialog__input')}
            id="identification"
            name="identification"
            onChange={(value) => formik.setFieldValue(
              'identification',
              value,
            )}
            value={formik.values.identification}
            placeholder="Идентификационный номер"
          />

          <DatePicker
            format="DD.MM.YYYY"
            locale={locale}
            oneTap
            id="birthdate"
            name="birthdate"
            onChange={(value) => formik.setFieldValue(
              'birthdate',
              value,
            )}
            value={formik.values.birthdate}
            placeholder="Дата Рождения"
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
            placeholder="Пол"
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
