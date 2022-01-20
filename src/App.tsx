import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {PATHS} from './const';
import {Auth, Home} from './pages';

const App = () => {
  return (
    <Routes>
      <Route path={PATHS.HOME.path} element={<Home />} />
      <Route path={PATHS.AUTH.path} element={<Auth />} />
    </Routes>
  );
};

export default App;
