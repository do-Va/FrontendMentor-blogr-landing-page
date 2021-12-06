import { useState } from 'react';

import Dropdown from './dropdown/dropdown.component';

import LightArrow from '../../../../images/icon-arrow-light.svg';
import DarkArrow from '../../../../images/icon-arrow-dark.svg';

import './menu-item.styles.scss';

const MenuItem = ({ name, dropdown }) => {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  return (
    <li className="Menu__item">
      <div
        className="Menu__item-header"
        onClick={() => setShowDropdownMenu(!showDropdownMenu)}
      >
        <p className={showDropdownMenu && 'light'}>{name}</p>
        <div className={`${showDropdownMenu ? 'rotate' : ''} img-box`}></div>
      </div>
      <Dropdown dropdown={dropdown} showDropdownMenu={showDropdownMenu} />
    </li>
  );
};

export default MenuItem;
