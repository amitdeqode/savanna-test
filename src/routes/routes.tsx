import Home from '../pages/Home';
import ErrorPage from '../error-page';
import { RouteObject } from 'react-router-dom';

const path = '/';

export const routes: RouteObject[] = [
  {
    path: path,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
];
