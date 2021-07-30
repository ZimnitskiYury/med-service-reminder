import * as React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './menu.css';


function Menu() {
  return (
    <menu className={classNames('menu')}>
      <Link
        className={classNames(
          'menu__link',
          'menu__link_active',
        )}
        to="/dashboard"
      >
        Главная
      </Link>
      <Link className={classNames('menu__link')} to="/calendar">Календарь</Link>
      <Link className={classNames('menu__link')} to="/patients">Пациенты</Link>
      <Link className={classNames('menu__link')} to="/report">Отчет</Link>
      <Link className={classNames('menu__link')} to="/narcology">Наркология</Link>
      <Link className={classNames('menu__link')} to="/psychiatry">Психиатрия</Link>
    </menu>
  );
}

export default Menu;
