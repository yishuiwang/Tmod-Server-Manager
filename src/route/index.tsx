import { ReactNode } from 'react';
import Home from '../pages/home/home';
import LoginForm from '../pages/login/login';

interface MyRouter {
  tittle: string;
  path: string;
  key: string;
  exact?: boolean;
  component?: ReactNode;
  children?: MyRouter[];
}

const router: MyRouter[] = [
  {
    tittle: '主页面',
    path: '/home',
    key: 'home',
    component: <Home />,
  },
];

export const unAuthRouter: MyRouter[] = [
  {
    tittle: '登录',
    path: '/login',
    key: 'login',
    component: <LoginForm />,
  },
];

export default router;
