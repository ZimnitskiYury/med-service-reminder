import React from 'react';
import classNames from 'classnames';
import {
  Input,
  InputPicker,
} from 'rsuite';
import { useFormik } from 'Formik';


const whereabouts = [
  {
    label: 'Брагинский р-н',
    value: 'Брагинский р-н',
  },
  {
    label: 'Выбытие по РБ',
    value: 'Выбытие по РБ',
  },
  {
    label: 'МЛС',
    value: 'МЛС',
  },
  {
    label: 'ЛТП',
    value: 'ЛТП',
  },
  {
    label: 'ПБ',
    value: 'ПБ',
  },
  {
    label: 'РФ',
    value: 'РФ',
  },
  {
    label: 'Зарубежье',
    value: 'Зарубежье',
  },
];
const region = [
  {
    label: '1 участок',
    value: '1 участок',
  },
  {
    label: '2 участок',
    value: '2 участок',
  },
  {
    label: '3 участок',
    value: '3 участок',
  },
  {
    label: 'Комаринская УБ',
    value: 'Комаринская УБ',
  },
  {
    label: 'Маложинская АВОП',
    value: 'Маложинская АВОП',
  },
  {
    label: 'Н-Иолчанская АВОП',
    value: 'Н-Иолчанская АВОП',
  },
  {
    label: 'Храковичская АВОП',
    value: 'Храковичская АВОП',
  },
];
const administrative = [
  {
    label: 'Брагин',
    value: 'Брагин',
  },
  {
    label: 'Комаринский с/с',
    value: 'Комаринский с/с',
  },
  {
    label: 'Бурковский с/с',
    value: 'Бурковский с/с',
  },
  {
    label: 'Малейковский с/с',
    value: 'Малейковский с/с',
  },
  {
    label: 'Маложинский с/с',
    value: 'Маложинский с/с',
  },
  {
    label: 'Н-Иолчанский с/с',
    value: 'Н-Иолчанский с/с',
  },
  {
    label: 'Чемерисский с/с',
    value: 'Чемерисский с/с',
  },
  {
    label: 'Угловский с/с',
    value: 'Угловский с/с',
  },
];

function PatientLocation() {
  const formik = useFormik({
    initialValues: {
      administrative: 'Брагин',
      locality: '',
      address: '',
      region: '1 участок',
      registration: '',
      whereabouts: 'Брагинский р-н',
      phone: '',
    },
    onSubmit: () => {},
  });

  return (
    <form id="add-location-patient-form" className={classNames('patient-page__step')} onSubmit={formik.handleSubmit}>
      <h1 className={classNames('patient-page__title')}>Место проживания</h1>
      <div className={classNames('patient-page__input-group')}>
        <label htmlFor="administrative" className={classNames('patient-page__label')}>Административная территория</label>
        <InputPicker
          style={{ width: '100%' }}
          data={administrative}
          id="administrative"
          name="administrative"
          onChange={(value) => formik.setFieldValue(
            'administrative',
            value,
          )}
          value={formik.values.administrative}
        />
      </div>

      <div className={classNames('patient-page__input-group')}>
        <label htmlFor="region" className={classNames('patient-page__label')}>Участок</label>
        <InputPicker
          style={{ width: '100%' }}
          id="region"
          name="region"
          onChange={(value) => formik.setFieldValue(
            'region',
            value,
          )}
          value={formik.values.region}
          data={region}
        />
      </div>

      <div className={classNames('patient-page__input-group')}>
        <label htmlFor="whereabouts" className={classNames('patient-page__label')}>Местонахождение</label>
        <InputPicker
          style={{ width: '100%' }}
          id="whereabouts"
          name="whereabouts"
          onChange={(value) => formik.setFieldValue(
            'whereabouts',
            value,
          )}
          value={formik.values.whereabouts}
          data={whereabouts}
        />
      </div>

      <div className={classNames('patient-page__input-group')}>
        <label htmlFor="locality" className={classNames('patient-page__label')}>Населенный пункт</label>
        <Input
          classPrefix={classNames('patient-page__input')}
          id="locality"
          name="locality"
          onChange={(value) => formik.setFieldValue(
            'locality',
            value,
          )}
          value={formik.values.locality}
          placeholder="Брагин"
        />
      </div>

      <div className={classNames('patient-page__input-group')}>
        <label htmlFor="address" className={classNames('patient-page__label')}>Адрес</label>
        <Input
          classPrefix={classNames('patient-page__input')}
          id="address"
          name="address"
          onChange={(value) => formik.setFieldValue(
            'address',
            value,
          )}
          value={formik.values.address}
          placeholder="улица Неназванная, 43/17"
        />
      </div>

      <div className={classNames('patient-page__input-group')}>
        <label htmlFor="registration" className={classNames('patient-page__label')}>Регистрация</label>
        <Input
          classPrefix={classNames('patient-page__input')}
          id="registration"
          name="registration"
          onChange={(value) => formik.setFieldValue(
            'registration',
            value,
          )}
          value={formik.values.registration}
          placeholder="прописан по адресу"
        />
      </div>

      <div className={classNames('patient-page__input-group')}>
        <label htmlFor="phone" className={classNames('patient-page__label')}>Телефон</label>
        <Input
          classPrefix={classNames('patient-page__input')}
          id="phone"
          name="phone"
          onChange={(value) => formik.setFieldValue(
            'phone',
            value,
          )}
          value={formik.values.phone}
          placeholder="+375 44 767 83 27"
        />
      </div>

    </form>
  );
}

export default PatientLocation;
