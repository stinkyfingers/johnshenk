import React from 'react';
import ResumeText from './resumetext';

const Plain = React.lazy(() => import('./plaincss'));
const Normal = React.lazy(() => import('./normalcss'));

const Resume = () => {
  return (
    <div className="resume">
      <React.Suspense fallback={<ResumeText />}>
        {window.location.pathname === '/plain' ? <Plain /> : <Normal />}
        <ResumeText />
      </React.Suspense>
    </div>
)};


export default Resume;
