import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import styles from '../css/menu.module.css';

const sites = [
  {name: 'Badlibs', url: `${window.location.protocol}//badlibs.john-shenk.com`},
  {name: 'Scribblefest', url: `${window.location.protocol}//scribblefest.john-shenk.com`},
  {name: 'Bulls & Cows', url: `${window.location.protocol}//bullsandcows.john-shenk.com`},
];

const Menu = () => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.menu}>
      <button
        type="button"
        className={styles.menuButton}
        aria-haspopup="true"
        aria-expanded={show}
        aria-controls="external-links-menu"
        aria-label="External links"
        onClick={() => setShow((prev) => !prev)}
      >
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
      </button>
      {show && (
        <ul id="external-links-menu" className={styles.menuList} role="menu" aria-label="External links">
          {sites.map((site) => (
            <li key={site.name} role="none">
              <a href={site.url} target="_blank" rel="noopener noreferrer" role="menuitem">{site.name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
