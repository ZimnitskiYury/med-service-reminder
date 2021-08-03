import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import useInput from 'common/hooks/inputHook';

import './header.css';


function CalendarMode() {
  return (
    <div className={classNames('header__calendar-mode')}>
      <button
        type="button"
        className={classNames(
          'header__calendar-button',
          { 'header__calendar-button_active': true },
        )}
      >
        Дни
      </button>
      <button
        type="button"
        className={classNames(
          'header__calendar-button',
          { 'header__calendar-button_active': false },
        )}
      >
        Месяцы
      </button>
      <button
        type="button"
        className={classNames(
          'header__calendar-button',
          { 'header__calendar-button_active': false },
        )}
      >
        Годы
      </button>
    </div>
  );
}

function SpecializationMode() {
  return (
    <div className={classNames('header__specialization')}>
      <button
        type="button"
        className={classNames(
          'header__specialization-button',
          { 'header__specialization-button_active': true },
        )}
      >
        Общая
      </button>
      <button
        type="button"
        className={classNames(
          'header__specialization-button',
          { 'header__specialization-button_active': false },
        )}
      >
        Наркология
      </button>
      <button
        type="button"
        className={classNames(
          'header__specialization-button',
          { 'header__specialization-button_active': false },
        )}
      >
        Психиатрия
      </button>
    </div>
  );
}

function Search() {
  const { value, onChange } = useInput('');

  return (
    <input className={classNames('header__search')} value={value} onChange={onChange} placeholder="Поиск пациентов" />
  );
}

function Header() {
  const location = useLocation();
  const [
    component,
    setComponent,
  ] = useState(<div>In construction</div>);

  useEffect(
    () => {
      switch (location.pathname) {
        case '/dashboard':
        case '/patients': { setComponent(<SpecializationMode />); break; }
        case '/calendar': { setComponent(<CalendarMode />); break; }
        default: { setComponent(<div>In construction</div>); break; }
      }
    },
    [location.pathname],
  );

  return (
    <header className={classNames('header')}>
      <Search />
      {component}
    </header>
  );
}

export default Header;
