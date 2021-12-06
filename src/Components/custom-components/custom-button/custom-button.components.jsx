import './custom-button.styles.scss';

const CustomButton = ({ title, main, secondary }) => {
  return (
    <button
      className={`${
        main ? 'main' : secondary ? 'secondary' : ''
      } Custom-button`}
    >
      {title}
    </button>
  );
};

export default CustomButton;
