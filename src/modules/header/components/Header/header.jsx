import * as React from 'react';
import classNames from 'classnames';

import useInput from 'common/hooks/inputHook';

import './header.css';


function Specialization() {
  return (
    <div className={classNames('header__specialization')}>
      <button type="button" className={classNames('header__specialization-button')}>Общая</button>
      <button type="button" className={classNames('header__specialization-button')}>Наркология</button>
      <button
        type="button"
        className={classNames(
          'header__specialization-button',
          'header__specialization-button_active',
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
  return (
    <header className={classNames('header')}>
      <Search />
      <Specialization />
    </header>
  );
}

export default Header;
