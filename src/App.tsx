import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {CheckAuth} from './components';
import {PATHS} from './const';
import {Auth, Home} from './pages';

const App = () => {
  return (
    <Routes>
      <Route
        path={PATHS.HOME.path}
        element={
          <CheckAuth>
            <Home />
          </CheckAuth>
        }
      />
      <Route path={PATHS.AUTH.path} element={<Auth />} />
    </Routes>
  );
};

export default App;
