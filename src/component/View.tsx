import React from 'react';
import router from '../route';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import AppLayout from './AppLayout';

export default function View() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />}></Route>

          {router.map((r) => (
            <Route key={r.key} path={r.path} element={r.component}></Route>
          ))}
          <Route path="/*" element={<AppLayout />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
