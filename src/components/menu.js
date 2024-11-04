import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import styles from '../css/menu.module.css';

const sites = [
  {name: 'Badlibs', url: `${window.location.protocol}//badlibs.john-shenk.com`},
  {name: 'Scribblefest', url: `${window.location.protocol}//scribblefest.john-shenk.com`},
  {name: 'Bulls & Cows', url: `${window.location.protocol}//bullsandcows.john-shenk.com`},
  {name: 'Difference Between', url: `${window.location.protocol}//differencebetween.john-shenk.com`}
];

const Menu = () => {
  const [show, setShow] = useState(false);

  const renderMenuList = (closeFn) => {
    const links = [<FontAwesomeIcon key='close' icon={faWindowClose} onClick={closeFn} />];

    sites.forEach((site) => {
      links.push(<li key={site.name}>
        <a href={site.url} target='blank' rel='noopener noreferrer'>{site.name}</a>
      </li>);
    });
    return(<ul className={styles.menuList}>{links}</ul>)
  }

  return (
    <div className={styles.menu}>
      {show ?
        <div>{renderMenuList(() => setShow(!show))}</div>
        :<div className={styles.menuButton} onClick={() => setShow(!show)}>External Links</div>}
    </div>
  );
};

export default Menu;
