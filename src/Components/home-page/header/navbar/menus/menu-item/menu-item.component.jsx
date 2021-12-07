import { useEffect, useState } from 'react';

import Dropdown from './dropdown/dropdown.component';

import './menu-item.styles.scss';

const MenuItem = ({ name, dropdown }) => {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  const handleChange = () => {
    setShowDropdownMenu(false);
  };

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
