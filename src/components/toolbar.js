import React from 'react';
import Menu from './menu';
import styles from '../css/toolbar.module.css';
import { useNavigate } from 'react-router-dom';

const Toolbar = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate(`/${e.target.name}`);
  }
  return (
    <div className={styles.toolbar}>
      <Menu />
      <div className={styles.links}>
        <button className={styles.toolbarButton} onClick={handleClick} name="">Resume</button>
        <button className={styles.toolbarButton} onClick={handleClick} name="resume?format=plain">Resume (Plain Text)</button>
        <button className={styles.toolbarButton} onClick={handleClick} name="guitars">Guitars</button>
      </div>
    </div>
  );
}
export default Toolbar;
