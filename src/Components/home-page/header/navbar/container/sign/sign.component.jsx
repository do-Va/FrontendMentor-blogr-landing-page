import SignUp from './sign-up/sign-up.component';
import SignIn from './sign-in/sign-in.component';

import './sign.styles.scss';

const Sign = () => {
  return (
    <div className="Sign">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Sign;
