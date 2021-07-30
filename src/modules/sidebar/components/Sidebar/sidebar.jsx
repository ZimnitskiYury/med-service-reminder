import * as React from 'react';
import classNames from 'classnames';

import Menu from 'modules/sidebar/components/Menu/menu';
import { ReactComponent as LogoSvg } from 'resources/svg/logo.svg';

import './sidebar.css';


function Logo() {
  return (
    <div className={classNames('sidebar__logo')}>
      <LogoSvg className={classNames('sidebar__logo-svg')} />
      <span className={classNames('sidebar__logo-text')}>Medical Reminder</span>
    </div>
  );
}
function Sidebar() {
  return (
    <section className={classNames('sidebar')}>
      <Logo />
      <Menu />
    </section>
  );
}

export default Sidebar;
