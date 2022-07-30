import React from 'react';
import router, { unAuthRouter } from '../route';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import AppLayout from './AppLayout';
import NotFound from '../pages/404/page404';
import SSH from '../pages/SSH/ssh';

export default function View() {
  return (
    <div>
      <Router>
        <Routes>
          {unAuthRouter.map((r) => (
            <Route key={r.key} path={r.path} element={r.component}></Route>
          ))}
          <Route path="/" element={<Navigate to="/login" replace />}></Route>

          <Route path="/ssh" element={<AppLayout><SSH></SSH></AppLayout>}></Route>

          {router.map((r) => (
            <Route
              key={r.key}
              path={r.path}
              element={<AppLayout>{r.component}</AppLayout>}
            ></Route>
          ))}

          <Route path="/404" element={<NotFound></NotFound>} />
          <Route path="*" element={<Navigate to="/404" replace />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
