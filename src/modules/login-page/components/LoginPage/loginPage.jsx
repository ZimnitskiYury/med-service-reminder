/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import classNames from 'classnames';
import useInput from 'common/hooks/inputHook';

import './loginPage.css';


function Login() {
  const { value: login, onChange: onChangeLogin } = useInput('');
  const { value: password, onChange: onChangePassword } = useInput('');
  const label = 'login';

  return (
    <section className={classNames('login-page__root')}>
      <div className={classNames('login-page__modal')}>
        <header className={classNames('login-page__header')}>
          <h1 className={classNames('login-page__header-title')}>Вход</h1>
          <p className={classNames('login-page__header-annotation')}>Введите свои данные</p>
        </header>
        <div className={classNames('login-page__input-container')}>
          <label htmlFor="login" className={classNames('login-page__input-label')}>
            login
          </label>
          <input id="login" className={classNames('login-page__input')} value={login} onChange={onChangeLogin} />
        </div>
        <div className={classNames('login-page__input-container')}>
          <label htmlFor="password" className={classNames('login-page__input-label')}>
            password
          </label>
          <input id="password" className={classNames('login-page__input')} value={password} onChange={onChangePassword} />
        </div>
        <button
          type="submit"
          className={classNames(
            'login-page__button',
            { 'login-page__button_disabled': true },
          )}
        >
          Войти
        </button>
      </div>
    </section>
  );
}

export default Login;

