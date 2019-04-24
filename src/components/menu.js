import React, { useState } from 'react';
import '../css/menu.css';

const sites = [
  {name: 'Badlibs', url: 'http://badlibs.john-shenk.com'},
  {name: 'Scribblefest', url: 'http://scribblefest.john-shenk.com'},
  {name: 'Bulls & Cows', url: 'http://bullsandcows.john-shenk.com'}
]

export default function Menu() {
  const [show, setShow] = useState(false);

  function renderMenuList(closeFn) {
    let links = [<li key='close' id='close' onClick={closeFn}>X</li>];
    sites.forEach((site) => {
      links.push(<li key={site.name}>
        <a href={site.url} target='blank'>{site.name}</a>
      </li>);
    });
    return(<ul className='menuList'>{links}</ul>)
  }

  return (
    <div className='menu'>
      {show ?
        <div><div>{renderMenuList(() => setShow(!show))}</div></div>
        :<div onClick={() => setShow(!show)}>MENU</div>}
    </div>
  );
}
