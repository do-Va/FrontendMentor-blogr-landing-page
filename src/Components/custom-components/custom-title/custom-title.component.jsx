import './custom-title.styles.scss';

const CustomTitle = ({ title, text, dark }) => {
  return (
    <div className={`Custom-title ${dark ? 'dark' : ''} `}>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default CustomTitle;
