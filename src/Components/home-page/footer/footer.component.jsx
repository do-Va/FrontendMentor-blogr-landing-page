import { menus } from '../../../utils/constants';

import Logo from '../header/navbar/logo/logo.component';

import './footer.styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Logo footer="footer" />
        <ul className="sup-container">
          {menus.map(menu => {
            return (
              <li key={menu.id} className="sup">
                {menu.name}
                <ul>
                  {menu.dropdown.map((item, idx) => {
                    return (
                      <li className="sub" key={idx}>
                        <p>{item}</p>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="attribution">
        <p>
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor.
          </a>
        </p>
        <p>
          Coded by{' '}
          <a href="https://github.com/do-Va" target="_blank" rel="noreferrer">
            do-Va
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
