import { useState } from 'react';

import Dropdown from './dropdown/dropdown.component';

import './menu-item.styles.scss';

const MenuItem = ({ name, dropdown }) => {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  const handleChange = () => {
    setShowDropdownMenu(!showDropdownMenu);
  };

  return (
    <li className="Menu__item">
      <div className="Menu__item-header" onClick={handleChange}>
        <p className={showDropdownMenu ? 'light' : ''}>{name}</p>
        <div className={`${showDropdownMenu ? 'rotate' : ''} img-box`}></div>
      </div>
      <Dropdown
        dropdown={dropdown}
        showDropdownMenu={showDropdownMenu}
        handleChange={handleChange}
      />
    </li>
  );
};

export default MenuItem;
