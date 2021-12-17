import DropdownItem from './dropdown-item/dropdown-item.component';

import './dropdown.styles.scss';

const Dropdown = ({ dropdown, showDropdownMenu, handleChange }) => {
  const handleOut = () => {
    if (window.innerWidth >= 800) {
      handleChange();
    }
  };

  return (
    <ul
      className={`Dropdown ${showDropdownMenu ? 'show' : ''}`}
      onMouseLeave={handleOut}
    >
      {dropdown.map((item, idx) => {
        return <DropdownItem key={idx} item={item} />;
      })}
    </ul>
  );
};

export default Dropdown;
