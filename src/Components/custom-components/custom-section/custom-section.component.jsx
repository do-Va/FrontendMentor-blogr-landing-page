import CustomImage from '../custom-image/custom-image.component';
import CustomTitle from '../custom-title/custom-title.component';

import { features } from '../../../utils/constants';

import './custom-section.styles.scss';

const CustomSection = ({ name, order, min, max }) => {
  return (
    <div className="Custom-section">
      <CustomImage name={name} order={order} />
      <div className={`custom-title-container ${order === 1 ? 'first' : ''} `}>
        {features
          .filter(feature => feature.id >= min && feature.id <= max)
          .map(feature => {
            return <CustomTitle key={feature.id} {...feature} />;
          })}
      </div>
    </div>
  );
};

export default CustomSection;
