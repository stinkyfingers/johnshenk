import React, { useMemo } from 'react';
import ResumeText from './resumetext';
import styles from '../css/resume.module.css';
import plainstyles from '../css/plainresume.module.css';

const queryString = (queryString) => {
  // note: does not support multiple values per key
  const str = queryString.replace('?', '', 1);
  const queries = {};
  str.split('&').map(s => {
    const arr = s.split('=');
    if (arr.length !== 2) return null;
    return queries[arr[0]] = arr[1];
  });
  return queries;
};

const Resume = () => {
  const queries = queryString(window.location.search);
  const plain = useMemo(() => {
    return queries.format === 'plain';
  }, [queries]);

  return (
    <div className={styles.resume}>
      { plain ? null : (
        <div className={styles.backgroundImage}>
          <img src={require("../Photos/IMG_0981_low.jpg")} alt="Me with sunglasses."/>
        </div>
      )}
      <ResumeText styles={plain ? plainstyles : styles } />
    </div>
)};


export default Resume;
