import React from 'react';
import ResumeText from './resumetext';

const Plain = React.lazy(() => import('./plaincss'));
const Normal = React.lazy(() => import('./normalcss'));

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

  return (
    <div className="resume">
      <React.Suspense fallback={<ResumeText />}>
        {queries.format === 'plain' ? <Plain /> : <Normal />}
        <ResumeText />
      </React.Suspense>
    </div>
)};


export default Resume;
