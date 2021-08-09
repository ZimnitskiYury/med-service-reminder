import React from 'react';
import classNames from 'classnames';
import { useFormik } from 'formik';
import { InputPicker, Input } from 'rsuite';


const heredity = [
  {
    label: 'не отягощена',
    value: 'не отягощена',
  },
  {
    label: 'отягощена',
    value: 'отягощена',
  },
];
const military = [
  {
    label: 'не служил',
    value: 'не служил',
  },
  {
    label: 'служил',
    value: 'служил',
  },
];
const education = [
  {
    label: 'базовое',
    value: 'базовое',
  },
  {
    label: 'общее среднее',
    value: 'общее среднее',
  },
  {
    label: 'средне-специальное',
    value: 'средне-специальное',
  },
  {
    label: 'высшее',
    value: 'высшее',
  },
];
const disability = [
  {
    label: 'не имеет',
    value: 'не имеет',
  },
  {
    label: '3 группа',
    value: '3 группа',
  },
  {
    label: '2 группа',
    value: '2 группа',
  },
  {
    label: '1 группа',
    value: '1 группа',
  },
];
const family = [
  {
    label: 'холост/не замужем',
    value: 'холост/не замужем',
  },
  {
    label: 'женат/замужем',
    value: 'женат/замужем',
  },
  {
    label: 'в разводе',
    value: 'в разводе',
  },
  {
    label: 'вдовец/вдова',
    value: 'вдовец/вдова',
  },
  {
    label: 'сожительствует',
    value: 'сожительствует',
  },
];
const work = [
  {
    label: 'не работает',
    value: 'не работает',
  },
  {
    label: 'ОАО «Брагинка»',
    value: 'ОАО «Брагинка»',
  },
  {
    label: 'ОАО «Брагинский»',
    value: 'ОАО «Брагинский»',
  },
  {
    label: 'ОАО «Им.Жукова»',
    value: 'ОАО «Им.Жукова»',
  },
  {
    label: 'ОАО «Комаринский»',
    value: 'ОАО «Комаринский»',
  },
  {
    label: 'ОАО «Маложинский»',
    value: 'ОАО «Маложинский»',
  },
  {
    label: 'ОАО «Пераможник»',
    value: 'ОАО «Пераможник»',
  },
  {
    label: 'ОАО «Чемерисский»',
    value: 'ОАО «Чемерисский»',
  },
  {
    label: 'ЦРБ',
    value: 'ЦРБ',
  },
];
const childrens = [
  {
    label: 'нет',
    value: 'нет',
  },
  {
    label: 'есть',
    value: 'есть',
  },
];
const drivelicense = [
  {
    label: 'нет',
    value: 'нет',
  },
  {
    label: 'есть',
    value: 'есть',
  },
];
const offenses = [
  {
    label: 'нет',
    value: 'нет',
  },
  {
    label: 'есть',
    value: 'есть',
  },
];
const conviction = [
  {
    label: 'нет',
    value: 'нет',
  },
  {
    label: 'есть',
    value: 'есть',
  },
];

function PatientLife() {
  const formik = useFormik({
    initialValues: {
      heredity: 'не отягощена',
      education: 'базовое',
      profession: '',
      military: 'не служил',
      work: 'не работает',
      position: '',
      disability: 'не имеет',
      family: 'холост/не замужем',
      childrens: 'нет',
      drivelicense: 'нет',
      offenses: 'нет',
      conviction: 'нет',
    },
    onSubmit: () => {},
  });

  return (
    <form id="add-location-patient-form" className={classNames('patient-page__step')} onSubmit={formik.handleSubmit}>
      <h1 className={classNames('patient-page__title')}>Анамнез жизни</h1>
      <div className={classNames('patient-page__input-group')}>
        <label htmlFor="heredity" className={classNames('patient-page__label')}>Наследственность</label>
        <InputPicker
          style={{ width: '100%' }}
          data={heredity}
          id="heredity"
          name="heredity"
          onChange={(value) => formik.setFieldValue(
            'heredity',
            value,
          )}
          value={formik.values.heredity}
        />
      </div>

      <div className={classNames('patient-page__input-group')}>
        <label htmlFor="education" className={classNames('patient-page__label')}>Образование</label>
        <InputPicker
          style={{ width: '100%' }}
          id="education"
          name="education"
          onChange={(value) => formik.setFieldValue(
            'education',
            value,
          )}
          value={formik.values.education}
          data={education}
        />
      </div>

      <div className={classNames('patient-page__input-group')}>
        <label htmlFor="military" className={classNames('patient-page__label')}>Военная служба</label>
        <InputPicker
          style={{ width: '100%' }}
          id="military"
          name="military"
          onChange={(value) => formik.setFieldValue(
            'military',
            value,
          )}
          value={formik.values.military}
          data={military}
        />
      </div>

      <div className={classNames('patient-page__input-group')}>
        <label htmlFor="work" className={classNames('patient-page__label')}>Место работы</label>
        <InputPicker
          creatable
          style={{ width: '100%' }}
          id="work"
          name="work"
          onChange={(value) => formik.setFieldValue(
            'work',
            value,
          )}
          value={formik.values.work}
          data={work}
        />
      </div>

      <div className={classNames('patient-page__input-group')}>
        <label htmlFor="disability" className={classNames('patient-page__label')}>Инвалидность</label>
        <InputPicker
          style={{ width: '100%' }}
          id="disability"
          name="disability"
          onChange={(value) => formik.setFieldValue(
            'disability',
            value,
          )}
          value={formik.values.disability}
          data={disability}
        />
      </div>

      <div className={classNames('patient-page__input-group')}>
        <label htmlFor="family" className={classNames('patient-page__label')}>Семейное положение</label>
        <InputPicker
          style={{ width: '100%' }}
          id="family"
          name="family"
          onChange={(value) => formik.setFieldValue(
            'family',
            value,
          )}
          value={formik.values.family}
          data={family}
        />
      </div>

      <div className={classNames('patient-page__input-group')}>
        <label htmlFor="childrens" className={classNames('patient-page__label')}>Дети</label>
        <InputPicker
          style={{ width: '100%' }}
          id="childrens"
          name="childrens"
          onChange={(value) => formik.setFieldValue(
            'childrens',
            value,
          )}
          value={formik.values.childrens}
          data={childrens}
        />
      </div>

      <div className={classNames('patient-page__input-group')}>
        <label htmlFor="drivelicense" className={classNames('patient-page__label')}>Водительское удостоверение</label>
        <InputPicker
          style={{ width: '100%' }}
          id="drivelicense"
          name="drivelicense"
          onChange={(value) => formik.setFieldValue(
            'drivelicense',
            value,
          )}
          value={formik.values.drivelicense}
          data={drivelicense}
        />
      </div>

      <div className={classNames('patient-page__input-group')}>
        <label htmlFor="offenses" className={classNames('patient-page__label')}>Административные правонарушения</label>
        <InputPicker
          style={{ width: '100%' }}
          id="offenses"
          name="offenses"
          onChange={(value) => formik.setFieldValue(
            'offenses',
            value,
          )}
          value={formik.values.offenses}
          data={offenses}
        />
      </div>

      <div className={classNames('patient-page__input-group')}>
        <label htmlFor="conviction" className={classNames('patient-page__label')}>Судимость</label>
        <InputPicker
          style={{ width: '100%' }}
          id="conviction"
          name="conviction"
          onChange={(value) => formik.setFieldValue(
            'conviction',
            value,
          )}
          value={formik.values.conviction}
          data={conviction}
        />
      </div>

      <div className={classNames('patient-page__input-group')}>
        <label htmlFor="profession" className={classNames('patient-page__label')}>Профессия</label>
        <Input
          classPrefix={classNames('patient-page__input')}
          id="profession"
          name="profession"
          onChange={(value) => formik.setFieldValue(
            'profession',
            value,
          )}
          value={formik.values.profession}
          placeholder="инженер-радиоэлектронщик"
        />
      </div>

      <div className={classNames('patient-page__input-group')}>
        <label htmlFor="position" className={classNames('patient-page__label')}>Должность</label>
        <Input
          classPrefix={classNames('patient-page__input')}
          id="position"
          name="position"
          onChange={(value) => formik.setFieldValue(
            'position',
            value,
          )}
          value={formik.values.position}
          placeholder="старший инженер"
        />
      </div>

    </form>
  );
}

export default PatientLife;
