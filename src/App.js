import React from 'react';
import Toolbar from './components/toolbar';
import Resume from './components/resume';
import Guitars from './components/guitars/guitars';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from './css/app.module.css';

const App = () => (
  <BrowserRouter>
    <div className={styles.App}>
      <Toolbar />
      <div className={styles.content}>
        <Routes>
          <Route exact path="/" element={<Resume />}/>
          <Route exact path="/resume" element={<Resume />}/>
          <Route exact path="/guitars" element={<Guitars />}/>
          <Route path="*" element={<Resume/>}/>
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
