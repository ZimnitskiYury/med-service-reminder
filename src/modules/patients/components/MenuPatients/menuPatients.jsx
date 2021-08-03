import React from 'react';
import classNames from 'classnames';

import './menuPatients.css';


function MenuPatients() {
  return (
    <menu className={classNames('menu-patients')}>
      <button className={classNames('menu-patients__button')} type="button">Добавить пациента</button>
    </menu>
  );
}

export default MenuPatients;
