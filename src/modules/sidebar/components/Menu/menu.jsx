import * as React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import usePathname from 'modules/sidebar/hooks/usePathname';

import './menu.css';


function Menu() {
  const { isActive } = usePathname();

  return (
    <menu className={classNames('menu')}>
      <Link
        className={classNames(
          'menu__link',
          { menu__link_active: isActive('/dashboard') },
        )}
        to="/dashboard"
      >
        Главная
      </Link>
      <Link
        className={classNames(
          'menu__link',
          { menu__link_active: isActive('/calendar') },
        )}
        to="/calendar"
      >
        Календарь
      </Link>
      <Link
        className={classNames(
          'menu__link',
          { menu__link_active: isActive('/patients') },
        )}
        to="/patients"
      >
        Пациенты
      </Link>
      <Link
        className={classNames(
          'menu__link',
          { menu__link_active: isActive('/report') },
        )}
        to="/report"
      >
        Отчет
      </Link>
      <Link
        className={classNames(
          'menu__link',
          { menu__link_active: isActive('/narcology') },
        )}
        to="/narcology"
      >
        Наркология
      </Link>
      <Link
        className={classNames(
          'menu__link',
          { menu__link_active: isActive('/psychiatry') },
        )}
        to="/psychiatry"
      >
        Психиатрия
      </Link>
    </menu>
  );
}

export default Menu;
