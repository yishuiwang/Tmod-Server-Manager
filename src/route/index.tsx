import { ReactNode } from 'react';
import NotFound from '../pages/404/page404';
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
    tittle: '登录',
    path: '/login',
    key: 'login',
    component: <LoginForm />,
  },
  {
    tittle: '主页面',
    path: '/home',
    key: 'home',
    component: <Home />,
  },

];

export default router;
