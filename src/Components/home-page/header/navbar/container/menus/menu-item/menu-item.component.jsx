import { useState } from 'react';

import Dropdown from './dropdown/dropdown.component';

import { ReactComponent as LightArrow } from '../../../../images/icon-arrow-light.svg';
import { ReactComponent as DarkArrow } from '../../../../images/icon-arrow-dark.svg';

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
        <DarkArrow className={showDropdownMenu ? 'rotate' : ''} />
      </div>
      <Dropdown dropdown={dropdown} showDropdownMenu={showDropdownMenu} />
    </li>
  );
};

export default MenuItem;
