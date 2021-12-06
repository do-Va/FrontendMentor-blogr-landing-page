import CustomButton from '../../../../custom-components/custom-button/custom-button.components';

import './buttons.styles.scss';

const Buttons = () => {
  return (
    <div className="Buttons">
      <CustomButton title={'Start for Free'} main />
      <CustomButton title={'Learn More'} secondary />
    </div>
  );
};

export default Buttons;
