import './App.scss';
import router from './router/router';

import useGlobalStyles from 'assets/styles/style';
import AuthComponent from 'core/layouts/auth/auth.component';
import { RouterProvider } from 'react-router-dom';

function App() {
  useGlobalStyles();
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
