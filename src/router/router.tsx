import { createBrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import AuthComponent from 'core/layouts/auth/auth.component';
import LoginComponent from 'pages/login/login.component';
import NotfoundComponent from 'pages/not-found/notfound.component';

const router = createBrowserRouter(
  [
    {
      path: Routes.auth,
      element: <AuthComponent />,
      children: [
        {
          path: Routes.login,
          element: <LoginComponent />,
        },
      ],
    },
    {
      path: '*',
      element: <NotfoundComponent />,
    },
  ],
  { basename: '/' }
);

export default router;
