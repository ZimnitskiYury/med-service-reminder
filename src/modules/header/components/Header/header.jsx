import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import useInput from 'common/hooks/inputHook';

import './header.css';


function HeaderMode({ array, startIndex = 0 }) {
  if (array.length === 0) {
    return (<div className={classNames('header__mode')}>In construction</div>);
  }

  return (
    <div className={classNames('header__mode')}>
      {
        array.map((
          array_, index,
        ) => (
          <button
            type="button"
            className={classNames(
              'header__mode-button',
              { 'header__mode-button_active': index === startIndex },
            )}
          >
            {array_}
          </button>
        ))
      }

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
        case '/dashboard': { setComponent(<HeaderMode
          array={[
            'Общая',
            'Психиатрия',
            'Наркология',
          ]}
          startIndex={0}
        />); break; }
        case (location.pathname.match(/^\/patients\/\d/) || {}).input: { setComponent(<HeaderMode
          array={[
            'Просмотр',
            'Редактирование',
            'Удаление',
          ]}
          startIndex={1}
        />); break; }
        case '/patients': { setComponent(<HeaderMode
          array={[
            'Общая',
            'Психиатрия',
            'Наркология',
          ]}
          startIndex={0}
        />); break; }
        case '/calendar': { setComponent(<HeaderMode
          array={[
            'Дни',
            'Месяцы',
            'Годы',
          ]}
          startIndex={0}
        />); break; }
        default: { setComponent(<HeaderMode
          array={[]}
          startIndex={0}
        />); break; }
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

HeaderMode.propTypes = {
  array: PropTypes.arrayOf(PropTypes.string).isRequired,
  startIndex: PropTypes.number.isRequired,
};

export default Header;
